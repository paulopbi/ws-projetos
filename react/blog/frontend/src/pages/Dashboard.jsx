import { useState } from "react";
import { postsDummy } from "../constants";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(postsDummy);
  return (
    <section className="dashboard">
      {posts.length > 0 ? (
        <div className="container dashboard__container">
          {posts.map((post) => (
            <article key={post.id} className="dashboard__post">
              <div className="dashboard__post-info">
                <div className="dashboard__post-thumbnail">
                  <img src={post.thumbnail} alt="Post Thumbnail" />
                </div>
                <h5>{post.title}</h5>
              </div>
              <div className="dashboard__post-actions">
                <Link to={`/posts/${post.id}`} className="btn sm">
                  View
                </Link>
                <Link to={`/posts/${post.id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <Link to={`/posts/${post.id}/delete`} className="btn sm danger">
                  Delete
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="center">No posts here </h2>
      )}
    </section>
  );
};

export default Dashboard;
