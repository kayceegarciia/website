'use client';

import { useEffect, useMemo, useState } from 'react';

type SearchResult = {
  id: string;
  uri: string;
  name: string;
  artists: string;
  imageUrl: string | null;
};

type RequestStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
};

export default function SongRequest() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [online, setOnline] = useState<boolean | null>(null);
  const [status, setStatus] = useState<RequestStatus>({ type: 'idle' });
  const [isSearching, setIsSearching] = useState(false);
  const [isRequesting, setIsRequesting] = useState<string | null>(null);

  const canSearch = useMemo(() => query.trim().length >= 2, [query]);

  useEffect(() => {
    let isMounted = true;

    async function fetchStatus() {
      try {
        const response = await fetch('/api/request?status=1');
        const data = (await response.json()) as { online?: boolean };
        if (isMounted && typeof data.online === 'boolean') {
          setOnline(data.online);
        }
      } catch {
        if (isMounted) {
          setOnline(null);
        }
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, 45000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSearch) {
      setStatus({ type: 'error', message: 'Type at least two characters.' });
      return;
    }

    setIsSearching(true);
    setStatus({ type: 'idle' });

    try {
      const response = await fetch(`/api/request?q=${encodeURIComponent(query.trim())}`);
      const data = (await response.json()) as { results?: SearchResult[]; error?: string };
      if (!response.ok) {
        throw new Error(data.error ?? 'Search failed.');
      }
      setResults(data.results ?? []);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Search failed.';
      setStatus({ type: 'error', message });
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }

  async function handleRequest(trackUri: string) {
    setIsRequesting(trackUri);
    setStatus({ type: 'loading', message: 'Sending request...' });

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackUri }),
      });
      const payloadText = await response.text();
      const data = payloadText
        ? (JSON.parse(payloadText) as { message?: string; error?: string; status?: string })
        : {};
      if (!response.ok) {
        throw new Error(data.error ?? payloadText ?? 'Request failed.');
      }
      setStatus({ type: 'success', message: data.message ?? 'Request sent!' });
      if (data.status === 'queued') {
        setOnline(true);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Request failed.';
      setStatus({ type: 'error', message });
    } finally {
      setIsRequesting(null);
    }
  }

  return (
    <section
      className="mt-10 border-2 bg-gradient-to-br from-black/80 via-black/50 to-black/80 backdrop-blur-lg shadow-[0_0_40px_rgba(14,165,81,0.15)]"
      style={{ borderColor: '#07450C' }}
    >
      <div className="border-b border-[#0EA551]/40 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: '#4ADE80' }}>
              Spotify
            </p>
            <h2 className="text-2xl font-semibold" style={{ color: '#0EA551' }}>
              Song Request
            </h2>
            <p className="text-sm" style={{ color: '#4ADE80' }}>
              Suggest a track for my Spotify queue.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">
              {online === null ? '🟡' : online ? '🟢' : '🌙'}
            </span>
            <span style={{ color: '#4ADE80' }}>
              {online === null
                ? 'Checking status...'
                : online
                ? "I'm coding right now! Request a song to my ears."
                : "I'm away, but request a song and I'll hear it later."}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 py-5">

        <form className="flex flex-col gap-3 md:flex-row" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by track, artist, or album"
            className="w-full bg-black/40 border border-[#0EA551] px-4 py-2 text-sm text-[#E7FFE5] placeholder:text-[#4ADE80] focus:outline-none focus:ring-2 focus:ring-[#0EA551]"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="bg-[#0EA551] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#4ADE80] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>

        {status.type !== 'idle' && (
          <div
            className={`rounded-md border px-4 py-2 text-sm ${
              status.type === 'success'
                ? 'border-emerald-400/60 text-emerald-200'
                : status.type === 'error'
                ? 'border-red-400/60 text-red-200'
                : 'border-amber-400/60 text-amber-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid gap-3">
          {results.length === 0 && !isSearching ? (
            <p className="text-sm" style={{ color: '#4ADE80' }}>
              Search for a track to request it.
            </p>
          ) : (
            results.map((track) => (
              <div
                key={track.id}
                className="flex flex-col gap-3 border border-[#0EA551]/40 bg-black/30 p-3 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden border border-[#0EA551]/40">
                    {track.imageUrl ? (
                      <img src={track.imageUrl} alt={track.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-[#4ADE80]">
                        No art
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#E7FFE5]">{track.name}</p>
                    <p className="text-xs text-[#4ADE80]">{track.artists}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRequest(track.uri)}
                  disabled={isRequesting === track.uri}
                  className="border border-[#0EA551] px-4 py-2 text-xs font-semibold text-[#0EA551] transition hover:bg-[#0EA551] hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isRequesting === track.uri ? 'Adding...' : 'Request'}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
