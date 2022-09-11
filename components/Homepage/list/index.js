import { FaEdit } from "react-icons/fa";
import List_item from "./list_item";
import useList from "../../fetching/useList";
import { useEffect, useState } from "react";
import fetching from "../../fetching";

const List = () => {
  const [entries, setEntries] = useState();
  const { list, isLoading, isError } = useList();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setEntries(list);
  }, [list]);

  async function deleteEntry(key) {
    console.log("DeleteEntry: ", key);
    const deleteData = await fetching.clear(key);
    setEntries(deleteData.data.list);
    return deleteData;
  }

  async function saveEntry(key, value) {
    setSaving(true);
    const saveData = await fetching.set(key, JSON.parse(value));
    setEntries(saveData.data.list);
    setSaving(false);
    return saveData;
  }

  function doNothing() {
    return;
  }

  function generateEmptyList(count) {
    let emptyList = [];
    for (let index = 0; index < count; index++) {
      emptyList.push(
        <div className="column is-6" key={index}>
          <List_item
            name={"Loading..."}
            content={""}
            deleteEntry={doNothing()}
            saveEntry={doNothing()}
          />
        </div>
      );
    }
    return emptyList;
  }

  return (
    <div className="list has-hoverable-list-items has-visible-pointer-controls">
      <div>{isError ? "failed to load" : ""}</div>
      <div className="columns is-multiline">
        {entries
          ? entries.map((item) => {
              return (
                <div className="column is-6" key={item[0]}>
                  <List_item
                    name={item[0]}
                    // content={JSON.stringify(item[1])}
                    content={JSON.stringify(item[1], null, 4)}
                    deleteEntry={(name) => deleteEntry(name)}
                    saveEntry={(name, value) => saveEntry(name, value)}
                    saving={saving}
                  />
                </div>
              );
            })
          : ""}
        {isLoading ? generateEmptyList(6) : ""}
      </div>
    </div>
  );
};

export default List;
