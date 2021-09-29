import { useHistory } from "react-router";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./Post.module.css";
const PostItem = (props) => {
  const router = useHistory();
  return (
    <div className={classes.Post}>
      <div>
        <strong>
          {props.post.id} {props.post.title}
        </strong>

        <p>{props.post.body}</p>
      </div>
      <div className={classes.PostBtns}>
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.delPost(props.post)}>Delet</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
