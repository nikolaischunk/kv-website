import { FaEdit } from "react-icons/fa";
import List_item from "../components/Homepage/list/list_item";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/kv/list");
  const data = await res.json();
  console.log("data", data);

  return {
    props: {
      data: data,
    },
    revalidate: 30,
  };
};

const ListPage = ({ data }) => {
  async function deleteEntry(key) {
    const res = await fetch(`/api/kv/clear?key=${key}`);
    const data = await res.json();
  }
  return (
    <div className="list has-hoverable-list-items has-visible-pointer-controls">
      <h3>list</h3>
      <div className="columns is-multiline">
        {data.map((item) => {
          return (
            <div className="column is-5" key={item[0]}>
              <List_item
                name={item[0]}
                content={JSON.stringify(item[1], null, 4)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPage;
