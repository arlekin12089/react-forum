import { Link } from "react-router-dom";
const PostForum = ({ title, id }) => {
  return (
    <Link to={`/post/${id}`}>
      <h2 className="post_title">
        {id}. {title}
      </h2>
    </Link>
  );
};

export default PostForum;
