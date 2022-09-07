async function setKVs() {
  let result = await lib.utils.kv["@release"].set({
    key: abc,
    value: "aaaaa",
  });
  let result1 = await lib.utils.kv["@release"].set({
    key: def,
    value: ["aaaaa"],
  });
}

const List = () => {
  return <></>;
};

export default List;
