type SpotifyDevice = {
  id: string;
  is_active: boolean;
};

type SpotifyTrack = {
  uri: string;
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: { name: string; images: Array<{ url: string }> };
};

type SpotifySearchResponse = {
  tracks?: {
    items: SpotifyTrack[];
  };
};

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name} environment variable`);
  }
  return value;
}

export type SpotifyAccessToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export async function getAccessToken(): Promise<SpotifyAccessToken> {
  const clientId = getEnv('SPOTIFY_CLIENT_ID');
  const clientSecret = getEnv('SPOTIFY_CLIENT_SECRET');
  const refreshToken = getEnv('SPOTIFY_REFRESH_TOKEN');

  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Spotify token refresh failed: ${response.status} ${details}`);
  }

  return (await response.json()) as SpotifyAccessToken;
}

async function spotifyFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { access_token } = await getAccessToken();
  const response = await fetch(`${SPOTIFY_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${access_token}`,
      ...(init?.headers ?? {}),
    },
  });

  if (response.status === 204) {
    return {} as T;
  }

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Spotify API error: ${response.status} ${details}`);
  }

  return (await response.json()) as T;
}

export async function getDevices(): Promise<SpotifyDevice[]> {
  const data = await spotifyFetch<{ devices: SpotifyDevice[] }>('/me/player/devices');
  return data.devices ?? [];
}

export async function addToQueue(trackUri: string): Promise<void> {
  const params = new URLSearchParams({ uri: trackUri });
  await spotifyFetch<void>(`/me/player/queue?${params.toString()}`, {
    method: 'POST',
  });
}

export async function addToPlaylist(trackUri: string, playlistId: string): Promise<void> {
  const body = JSON.stringify({ uris: [trackUri] });
  await spotifyFetch<void>(`/playlists/${playlistId}/tracks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
}

export async function searchTracks(query: string, limit = 8): Promise<SpotifyTrack[]> {
  const params = new URLSearchParams({
    q: query,
    type: 'track',
    limit: String(limit),
  });
  const data = await spotifyFetch<SpotifySearchResponse>(`/search?${params.toString()}`);
  return data.tracks?.items ?? [];
}

export function normalizeTrackUri(input: string): string | null {
  if (input.startsWith('spotify:track:')) {
    return input;
  }

  const match = input.match(/spotify\.com\/track\/(\w+)/i);
  if (match?.[1]) {
    return `spotify:track:${match[1]}`;
  }

  if (/^[A-Za-z0-9]{22}$/.test(input)) {
    return `spotify:track:${input}`;
  }

  return null;
}

export function formatArtists(track: SpotifyTrack): string {
  return track.artists.map((artist) => artist.name).join(', ');
}

export function pickImage(track: SpotifyTrack): string | null {
  return track.album.images?.[0]?.url ?? null;
}
