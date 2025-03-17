import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Thumbnail from "/images/blog22.jpg";
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          debitis quas cupiditate impedit ullam vitae, quasi illo autem, nobis
          minima molestias, itaque ipsam sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          placeat maiores voluptatem vel asperiores nobis, fugit eos temporibus
          corrupti, recusandae velit quo architecto fuga facilis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          adipisci, amet id excepturi beatae, veniam dolore omnis animi illum
          quaerat sunt fuga, aliquam eveniet hic. Soluta ex amet optio magnam.{" "}
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui velit
          veniam sapiente, sunt doloremque inventore rerum, saepe iusto, nihil
          minus culpa quo aliquam maxime eos a laudantium sed molestias ipsum
          accusantium optio! Fugit labore voluptas tenetur impedit vero?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio ea
          quaerat quidem enim sequi magnam modi nostrum. Eaque, numquam. Neque
          aperiam voluptates, cumque cupiditate temporibus eveniet maxime,
          libero beatae, iste tenetur expedita quibusdam dolorum obcaecati
          provident dicta! Voluptatem dolorum hic autem adipisci odio blanditiis
          modi consectetur nesciunt ex? Reiciendis, nisi. Minus, cum. Iste iure
          laborum fuga culpa, facere ut veniam eveniet iusto tenetur eum
          recusandae voluptatem, ex optio consequatur ipsum porro harum ullam
          unde, nesciunt sapiente! Consequuntur sed magnam ratione aut
          praesentium, veritatis dicta sunt deleniti? Veniam dolores earum ipsam
          iure tempora voluptate et eveniet sed enim ipsa rerum saepe, unde quas
          beatae deserunt hic, laborum in sunt veritatis esse commodi,
          recusandae dolorum eum inventore. Pariatur placeat nesciunt tempora,
          voluptatibus labore vitae aspernatur, optio similique reprehenderit
          repellat est eos rerum reiciendis accusantium corporis velit, aut
          deserunt ab laudantium tenetur. Tenetur illum alias soluta, vero,
          adipisci tempore consectetur debitis velit iure nemo magnam rerum odit
          possimus accusamus minus cupiditate corporis voluptatum odio fugiat
          quam, distinctio sequi! Harum tempore pariatur error repudiandae illo
          commodi veniam nulla ipsa magnam tempora nobis esse accusantium,
          necessitatibus impedit id unde sapiente provident numquam in quam
          voluptates libero corrupti? Omnis reiciendis quisquam cum eaque
          voluptates, dignissimos nihil magni, accusantium praesentium incidunt
          et. Minima tempora perferendis est? Error eum fugiat rerum quos sunt
          praesentium magni labore perspiciatis sint deserunt voluptatem in
          perferendis hic maiores tempore voluptate, sequi doloremque aspernatur
          nisi cumque iure maxime. Blanditiis unde quia beatae laborum quas, at
          quam illo molestias dicta inventore cumque voluptatem recusandae
          incidunt culpa facilis nobis ut tenetur rem corrupti itaque. Aliquid
          eligendi ducimus eius similique earum accusamus nihil ipsum sapiente
          ullam consectetur. Recusandae numquam odio natus saepe dolorem
          incidunt nesciunt iste dolores deleniti quas atque expedita
          aspernatur, quasi id impedit eius tenetur consequatur dicta enim sit
          rem consectetur. Cupiditate, dolores!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
