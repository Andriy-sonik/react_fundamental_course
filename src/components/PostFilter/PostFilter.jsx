import classes from "./PostFilter.module.css";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={classes.PostFilter}>
      <MyInput
        placeholder="Search ..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort"
        options={[
          { value: "title", name: "Title" },
          { value: "desc", name: "Description" },
        ]}
      />
    </div>
  );
};
export default PostFilter;
