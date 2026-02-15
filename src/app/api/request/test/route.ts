import { NextResponse } from 'next/server';
import { addToPlaylist, normalizeTrackUri } from '@/lib/spotify';

function getPlaylistId(): string {
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID;
  if (!playlistId) {
    throw new Error('Missing SPOTIFY_PLAYLIST_ID environment variable');
  }
  return playlistId;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { trackUri?: string; playlistId?: string };
    const rawUri = payload.trackUri ?? 'spotify:track:11dFghVXANMlKmJXsNCbNl';
    const playlistId = payload.playlistId ?? getPlaylistId();

    const trackUri = normalizeTrackUri(rawUri);
    if (!trackUri) {
      return NextResponse.json({ error: 'Invalid trackUri' }, { status: 400 });
    }

    await addToPlaylist(trackUri, playlistId);
    return NextResponse.json({ status: 'ok', playlistId, trackUri });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
