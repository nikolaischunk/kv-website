import { FaEdit } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import useClearEntry from "../../fetching/useClearEntry";
import list from "../../fetching/useList";
import { useEffect, useState } from "react";

const List_item = ({ name, content, deleteEntry, saveEntry, saving }) => {
  const [deleting, setDeleting] = useState(false);
  const [newValue, setNewValue] = useState(content);
  return (
    <div className="list-item">
      <div className="list-item-content">
        <div className="list-item-title">{name}</div>
        <div className="list-item-description">
          <textarea
            rows="3"
            className="textarea is-primary "
            style={{ resize: "none" }}
            defaultValue={content}
            onChange={(e) => setNewValue(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons mt-2">
          <button
            className={`button is-primary  ${saving ? "is-loading" : ""}`}
            onClick={() => {
              saveEntry(name, newValue);
            }}
            disabled={deleting || saving}
          >
            <span className="icon is-small">{<ImCheckmark />}</span>
            <span>Save</span>
          </button>
          <br />
          <button
            className={`button is-normal icon-text is-danger ${
              deleting ? "is-loading" : ""
            }`}
            onClick={() => {
              setDeleting(true);
              deleteEntry(name);
            }}
            disabled={deleting || saving}
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
