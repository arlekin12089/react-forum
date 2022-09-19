import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((response) => {
        const allPostsResponse = response.data;
        setAllPosts(allPostsResponse);
        //console.log(allPostsResponse)
      })
      .catch((error) => console.error("Error"));
  };

  return allPosts;
};

export default usePosts;
