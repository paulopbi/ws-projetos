import { useState } from "react";
import { postsDummy } from "../constants";
import PostItem from "../components/PostItem";

const CategoryPosts = () => {
  const [posts, setPosts] = useState(postsDummy);
  const emptyPostsArray = 0;
  return (
    <section>
      {posts.length > emptyPostsArray ? (
        <div className="container posts__container">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorID }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorID}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No Posts Founds</h2>
      )}
    </section>
  );
};

export default CategoryPosts;
