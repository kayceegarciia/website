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
      className="mt-6 rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-shadow duration-300"
    >
      <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🎵</span>
              <h2 className="text-xl font-bold" style={{ color: '#0EA551' }}>
                Put me on to Music!
              </h2>
            </div>
            <p className="text-xs" style={{ color: '#4ADE80' }}>
              Add a song for my Spotify queue, and if I'm offline, it'll add to a playlist for me to listen to later!
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 border border-[#0EA551]/30">
            <span className="text-sm">
              {online === null ? '🟡' : online ? '🟢' : '🌙'}
            </span>
            <span className="text-xs" style={{ color: '#4ADE80' }}>
              {online === null
                ? 'Checking...'
                : online
                ? 'Online'
                : 'Offline'}
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
            className="w-full rounded-lg bg-black/40 border border-[#0EA551]/50 px-4 py-2.5 text-sm text-[#E7FFE5] placeholder:text-[#4ADE80]/60 focus:outline-none focus:border-[#0EA551] focus:ring-1 focus:ring-[#0EA551] transition-all"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="rounded-lg bg-[#0EA551] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-[#4ADE80] hover:shadow-lg hover:shadow-[#0EA551]/50 disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>

        {status.type !== 'idle' && (
          <div
            className={`rounded-lg border px-4 py-2.5 text-xs font-medium ${
              status.type === 'success'
                ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-200'
                : status.type === 'error'
                ? 'border-red-400/60 bg-red-400/10 text-red-200'
                : 'border-amber-400/60 bg-amber-400/10 text-amber-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid gap-2">
          {results.length === 0 && !isSearching ? (
            <p className="text-xs text-center py-4" style={{ color: '#4ADE80' }}>
              Search for a track to request it.
            </p>
          ) : (
            results.map((track) => (
              <div
                key={track.id}
                className="flex flex-col gap-3 rounded-lg border border-[#0EA551]/30 bg-black/30 p-3 md:flex-row md:items-center md:justify-between hover:border-[#0EA551]/60 hover:bg-black/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-md overflow-hidden border border-[#0EA551]/40">
                    {track.imageUrl ? (
                      <img src={track.imageUrl} alt={track.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-[#4ADE80]">
                        🎵
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#E7FFE5] truncate">{track.name}</p>
                    <p className="text-xs text-[#4ADE80] truncate">{track.artists}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRequest(track.uri)}
                  disabled={isRequesting === track.uri}
                  className="rounded-lg border border-[#0EA551] px-4 py-2 text-xs font-semibold text-[#0EA551] transition hover:bg-[#0EA551] hover:text-black hover:shadow-lg hover:shadow-[#0EA551]/30 disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap"
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
