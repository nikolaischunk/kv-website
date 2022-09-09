import { MdModeEdit, MdDelete } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
const Table_item = ({ index, name, content, type }) => {
  return (
    <tr>
      <td>
        <button className="button is-primary icon-text">
          <span>Edit</span>
          <span className="icon">{<MdModeEdit />}</span>
        </button>
      </td>
      <th>{index}</th>
      <td>{name}</td>
      <td>{content}</td>
      <td>
        <button className="delete is-large"></button>
      </td>
    </tr>
  );
};

export default Table_item;
{
  /* <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="Value"
            value={value}
          ></input>
        </div> */
}
{
  /*value={JSON.stringify(item[1], null, 4)} 
        <textarea
          rows="2"
          className="textarea is-primary "
          placeholder="Value"
          value={value}
        ></textarea> */
}
{
  /* <td className="is-capitalized">{type}</td> */
}
