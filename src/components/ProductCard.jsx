
import style from "./ProductCard.module.css";

export function ProductCard({ product }) {
  //const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <article className={style.sliderSup}>
        <div>
            <img className={style.productImage}
            src="https://supskoolleeuwarden.nl/huren/wp-content/uploads/sites/2/2021/01/IMG-4258-300x300.jpg" alt="" />
        </div>
        <p>{product.name}</p>
        <p>from <span class="negrita">{product.createdDate}</span></p>
    </article>
  );
}