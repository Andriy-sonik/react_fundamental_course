import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const FormPost = (props) => {
  const [post, setPost] = useState({ title: "", desc: "" });

  const addPost = (e) => {
    e.preventDefault();
    props.addPost({ ...post, id: Date.now() });
    setPost({ title: "", desc: "" });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Input title"
        type="text"
      />
      <MyInput
        value={post.desc}
        onChange={(e) => setPost({ ...post, desc: e.target.value })}
        placeholder="Input description"
        type="text"
      />
      <MyButton onClick={addPost}>Add post</MyButton>
    </form>
  );
};
export default FormPost;
