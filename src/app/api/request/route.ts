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

function explainSpotifyError(message: string): { status: number; error: string } | null {
  const match = message.match(/Spotify API error: (\d{3})\s*(.*)/i);
  if (!match) {
    return null;
  }

  const status = Number(match[1]);
  const details = match[2]?.trim();
  const pathMatch = details?.match(/path=([^\s]+)/i);
  const path = pathMatch?.[1];

  if (status === 403) {
    const pathHint = path?.startsWith('/me/player/queue')
      ? ' This endpoint requires a Spotify Premium account and an active device.'
      : path?.startsWith('/playlists/')
      ? ' The token user must own the playlist or be a collaborator.'
      : '';
    return {
      status,
      error:
        'Spotify API error: 403 Forbidden. The refresh token user cannot edit that playlist or is missing the correct scope. ' +
        'Confirm the token was minted for the playlist owner (or a collaborator) and includes playlist-modify-public/private.' +
        pathHint +
        (details ? ` Details: ${details}` : ''),
    };
  }

  if (status === 404) {
    const pathHint = path?.startsWith('/me/player/queue')
      ? ' This usually means no active playback device is available.'
      : '';
    return {
      status,
      error:
        'Spotify API error: 404 Not Found. The playlist ID is wrong or the token user cannot access it. ' +
        'Verify SPOTIFY_PLAYLIST_ID and that the token user has access.' +
        pathHint +
        (details ? ` Details: ${details}` : ''),
    };
  }

  return {
    status,
    error: `Spotify API error: ${status}.${details ? ` Details: ${details}` : ''}`,
  };
}

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
    const explained = explainSpotifyError(message);
    if (explained) {
      return NextResponse.json({ error: explained.error }, { status: explained.status });
    }
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
    const explained = explainSpotifyError(message);
    if (explained) {
      return NextResponse.json({ error: explained.error }, { status: explained.status });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
