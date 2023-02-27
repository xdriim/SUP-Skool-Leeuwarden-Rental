
import style from "./ProductCard.module.css";

export function ProductCard({ product }) {
  //const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <article className={style.sliderSup}>
        <div>
            <img className={style.productImage}
            src={product.imgUrl} alt="" />
        </div>
        <p>{product.name}</p>
        <p>from <span className={style.negrita}>{product.price}€</span></p>
    </article>
  );
}