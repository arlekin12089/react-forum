import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../components/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  const { id } = useParams();
  const [postSingle, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchSinglePost();
    fetchComments();
  }, []);

  const fetchSinglePost = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };
  const filteredComments = comments.filter((comment) => comment.postId === postSingle.id);
  if (!filteredComments) return <div>Comments not found.</div>;
  return (
    <main className="main">
      <article>
        <div className="post_body">
            <h1>{postSingle.id}.{postSingle.title}</h1>
            <p>{postSingle.body}</p>
        </div>
        <h4 className="comment_heading">Comments:</h4>
        {filteredComments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </article>
      <div id="link">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </Link>
      </div>
    </main>
  );
};

export default Post;
