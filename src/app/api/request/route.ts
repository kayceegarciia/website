import { NextResponse } from 'next/server';
import {
  addToPlaylist,
  addToQueue,
  formatArtists,
  getDevices,
  normalizeTrackUri,
  pickImage,
  searchTracks,
} from '@/lib/spotify';

function getPlaylistId(): string {
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID;
  if (!playlistId) {
    throw new Error('Missing SPOTIFY_PLAYLIST_ID environment variable');
  }
  return playlistId;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const statusOnly = searchParams.get('status');

    if (statusOnly === '1') {
      const devices = await getDevices();
      const online = devices.some((device) => device.is_active);
      return NextResponse.json({ online });
    }

    if (!query) {
      return NextResponse.json({ error: 'Missing query' }, { status: 400 });
    }

    const tracks = await searchTracks(query);
    const results = tracks.map((track) => ({
      id: track.id,
      uri: track.uri,
      name: track.name,
      artists: formatArtists(track),
      imageUrl: pickImage(track),
    }));

    return NextResponse.json({ results });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { trackUri?: string };
    const rawUri = payload.trackUri;

    if (!rawUri) {
      return NextResponse.json({ error: 'Missing trackUri' }, { status: 400 });
    }

    const trackUri = normalizeTrackUri(rawUri);
    if (!trackUri) {
      return NextResponse.json({ error: 'Invalid trackUri' }, { status: 400 });
    }

    const devices = await getDevices();
    const online = devices.some((device) => device.is_active);

    if (online) {
      await addToQueue(trackUri);
      return NextResponse.json({
        status: 'queued',
        message: 'Added to live queue!',
      });
    }

    const playlistId = getPlaylistId();
    await addToPlaylist(trackUri, playlistId);

    return NextResponse.json({
      status: 'playlist',
      message: 'Saved to playlist since Kaycee is offline.',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
