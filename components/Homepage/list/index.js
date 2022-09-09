import { FaEdit } from "react-icons/fa";
import List_item from "./list_item";
import useList from "../../fetching/useList";

const List = () => {
  const { list, isLoading, isError } = useList();
  console.log("list", list);

  return (
    <div className="list has-hoverable-list-items has-visible-pointer-controls">
      <div>{isError ? "failed to load" : ""}</div>
      <div className="columns is-multiline">
        {list
          ? list.map((item) => {
              return (
                <div className="column is-6" key={item[0]}>
                  <List_item
                    name={item[0]}
                    content={JSON.stringify(item[1], null, 4)}
                  />
                </div>
              );
            })
          : "loading..."}
      </div>
    </div>
  );
};

export default List;
