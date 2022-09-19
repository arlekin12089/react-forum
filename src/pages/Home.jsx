import PostForum from "../components/PostForum";

const Home = ({ allPosts }) => {
  return (
    <main className="main">
      {allPosts.map((post, index) => {
        return (
          <article key={index} className="post_item">
            <PostForum title={post.title} id={post.id} />
          </article>
        );
      })}
    </main>
  );
};

export default Home;
