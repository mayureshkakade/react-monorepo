import { useEffect, useState } from 'react';

export const useDebounce = <T, R>(
  query: T,
  fn: (input: T) => Promise<R | null>,
) => {
  const [debouncedResult, setDebouncedResult] = useState<R | null>(null);

  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      if (query) {
        setDebouncedResult(await fn(query));
      }
    }, 800);

    return () => clearTimeout(debounceTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return debouncedResult;
};
