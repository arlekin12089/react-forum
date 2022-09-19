import { Link } from "react-router-dom";
const PostForum = ({ title, id }) => {
  return (
  
      <h2 className="post_title">
	    <Link to={`/post/${id}`}>
		        {id}. {title}
		</Link>

      </h2>
  );
};

export default PostForum;
