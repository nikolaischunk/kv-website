import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useList() {
    const { data, error } = useSWR(`/api/kv/list`, fetcher);
//   const data = [
//     ["CURRENT_BIRTHDAY_CHILDREN_306763470886404098", ["305011722014687232"]],
//     [
//       "CURRENT_BIRTHDAY_CHILDREN_836344860884860928",
//       {
//         id: 10,
//         name: "John",
//         data: [
//           ["852596313362399245"],
//           ["852596313362399245"],
//           ["852596313362399245"],
//         ],
//       },
//     ],
//     ["CURRENT_BIRTHDAY_CHILDREN_849934985884729374", ["515574228142129152"]],
//     ["CURRENT_BIRTHDAY_CHILDREN_934467365389893704", ["267614892821970945"]],
//     ["CURRENT_BIRTHDAY_CHILDREN_903207392521641994", ["869542767196532766"]],
//     ["CURRENT_BIRTHDAY_CHILDREN_846910234961903638", ["143356543918669824"]],
//     ["CURRENT_BIRTHDAY_CHILDREN_867695639013359636", ["867392963914498048"]],
//     ["CURRENT_BIRTHDAY_CHILDREN_770358991338733568", ["824881301608726578"]],
//   ];
//   const error = null;
  return {
    list: data,
    isLoading: !error && !data,
    isError: error,
  };
}
