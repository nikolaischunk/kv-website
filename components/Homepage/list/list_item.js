import { FaEdit } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import useClearEntry from "../../fetching/useClearEntry";
import list from "../../fetching/useList";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function deleteEntry(key) {
  console.log("DeleteEntry", key);
  const { data, error } = useSWR(`/api/kv/clear?key=${key}`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const List_item = ({ name, content }) => {
  //   console.log("name: ", name);
  //   console.log("content: ", content);

  return (
    <div className="list-item">
      <div className="list-item-content">
        <div className="list-item-title">{name}</div>
        {/* <div className="list-item-description">{content}</div> */}
        <div className="list-item-description">
          <textarea
            rows="3"
            className="textarea is-primary "
            // value={content}
            style={{ resize: "none" }}
            defaultValue={content}
          ></textarea>
        </div>
        <div className="buttons mt-2">
          <button className="button is-primary">
            <span className="icon is-small">{<ImCheckmark />}</span>
            <span>Save</span>
          </button>
          <br />
          <button
            className="button is-normal icon-text is-danger is-outlined"
            onClick={() => useDeleteEntry(name)}
          >
            <span>Delete</span>
            <span className="icon">{<MdDelete />} </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default List_item;
