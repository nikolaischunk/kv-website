import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useList() {
    const { data, error } = useSWR(`/api/kv/list`, fetcher);

  return {
    list: data,
    isLoading: !error && !data,
    isError: error,
  };
}
