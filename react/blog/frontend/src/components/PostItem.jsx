import { Link } from "react-router-dom";
import { limitTextSize } from "../util";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  category,
  title,
  description,
  authorID,
  thumbnail,
}) => {
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{limitTextSize("title", title)}</h3>
        </Link>
        <p>{limitTextSize("description", description)}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
