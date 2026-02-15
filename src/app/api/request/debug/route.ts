import { NextResponse } from 'next/server';
import { getAccessTokenScope, getCurrentUserProfile, getPlaylistSummary } from '@/lib/spotify';

function getPlaylistId(): string {
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID;
  if (!playlistId) {
    throw new Error('Missing SPOTIFY_PLAYLIST_ID environment variable');
  }
  return playlistId;
}

export async function GET() {
  try {
    const playlistId = getPlaylistId();
    const [viewer, playlist, scope] = await Promise.all([
      getCurrentUserProfile(),
      getPlaylistSummary(playlistId),
      getAccessTokenScope(),
    ]);

    return NextResponse.json({
      tokenScope: scope,
      tokenUser: {
        id: viewer.id,
        displayName: viewer.display_name ?? null,
      },
      playlist: {
        id: playlist.id,
        name: playlist.name,
        public: playlist.public,
        collaborative: playlist.collaborative,
        owner: {
          id: playlist.owner.id,
          displayName: playlist.owner.display_name ?? null,
        },
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
