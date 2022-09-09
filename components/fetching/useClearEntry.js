import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useList(key) {
  const { data, error } = useSWR(`/api/kv/clear?key=${key}`, fetcher);

  return {
    response: data,
    isLoading: !error && !data,
    isError: error,
  };
}
