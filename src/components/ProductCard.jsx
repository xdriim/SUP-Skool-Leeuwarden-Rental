import styles from "./ProductCard.module.css";

export function ProductCard({ product }) {
  //const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <article class="slider-sup">
        <div>
            <img src="./img/IMG-20200526-WA0013-300x300.jpg" alt="" />
        </div>
        <p>{product.name}</p>
        <p>from <span class="negrita">{product.createdDate}€</span></p>
    </article>
  );
}