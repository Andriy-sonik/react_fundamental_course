import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "../PostItem/PostItem";
import classes from "./PostList.module.css";
const PostList = ({ posts, title, delPost }) => {
  if (!posts.length) {
    return <h5 className="text-center">Empty data</h5>;
  }
  return (
    <div className={classes.PostList}>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} delPost={delPost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
