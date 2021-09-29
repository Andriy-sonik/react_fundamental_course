import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PosrService from "../API/PosrService";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [featchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PosrService.getById(params.id);
    setPost(responce.data);
  });
  const [featchComments, isComLoading, comError] = useFetching(async () => {
    const responce = await PosrService.getCommentsByPostId(params.id);
    setComments(responce.data);
  });
  useEffect(() => {
    featchPostById();
    featchComments();
  }, []);
  return (
    <div>
      <p>Post page № {params.id} </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <h3>
          {post.id} - {post.title}
        </h3>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <p>Loading...</p>
      ) : (
        comments.map((el) => (
          <div key={el.id}>
            <b> {el.id}</b>
            <h5>{el.email}</h5>
            <p>{el.body}</p>
            <p>{el.name}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default PostIdPage;
