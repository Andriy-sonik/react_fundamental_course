import { useEffect, useRef, useState } from "react";
import PosrService from "../API/PosrService";
import FormPost from "../components/FormPost/FormPost";
import PostFilter from "../components/PostFilter/PostFilter";
import PostList from "../components/PostList/PostList";
import MyButton from "../components/UI/MyButton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import MySelect from "../components/UI/MySelect/MySelect";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePost } from "../hooks/usePosts";
import { getPageCount, getPagesArray } from "../utils/pages";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const lastElem = useRef();

  const [fetchPost, isPostSLoading, postsError] = useFetching(async () => {
    const response = await PosrService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  useObserver(lastElem, page < totalPages, isPostSLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPost();
  }, [page, limit]);

  let pagesArray = getPagesArray(totalPages);

  const delPost = (item) => {
    setPosts([...posts].filter((e) => e.id !== item.id));
  };
  const addPost = (item) => {
    setPosts([...posts, item]);
    setModal(false);
  };
  const sortedAndSearchPosts = usePost(posts, filter.sort, filter.query);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPost}>fetchPost</MyButton>
      <MyButton onClick={() => setModal(true)}>Create user</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <FormPost addPost={addPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Count elements in page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 15, name: "15" },
          { value: -1, name: "Show all" },
        ]}
      ></MySelect>
      {postsError && <div>Error {postsError}</div>}
      {isPostSLoading && <h1 className="text-center">Loading...</h1>}
      <PostList
        posts={sortedAndSearchPosts}
        title={"List posts"}
        delPost={delPost}
      />
      <div ref={lastElem} style={{ height: 20, border: "1px solide green" }} />
      <div className="page_wrapper">
        {pagesArray.map((p) => (
          <MyButton
            key={p}
            onClick={() => changePage(p)}
            className={page === p ? "page page_active" : "page"}
          >
            {p}
          </MyButton>
        ))}
      </div>
    </div>
  );
};

export default Posts;
