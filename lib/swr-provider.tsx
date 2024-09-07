// swr-provider.tsx

'use client';

import { SWRConfig } from 'swr';

export const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        // Revalidate on focus (useful if you're switching tabs)
        revalidateOnFocus: false,
        // Automatically retry failed requests
        shouldRetryOnError: true,
        // Deduplicate requests that are made in a short time span
        dedupingInterval: 2000,
        // Optionally set a cache provider (like localStorage or sessionStorage)
        provider: () => new Map(),
        // Error retries and other options
        errorRetryInterval: 5000,
        errorRetryCount: 3,
        // Fetcher function (optional, you may already have a fetcher)
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
