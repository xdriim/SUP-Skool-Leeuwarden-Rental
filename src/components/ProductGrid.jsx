import { ProductCard } from "./ProductCard";
import style from "./ProductCard.module.css";
import React from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";


export function ProductGrid() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//     fetch('http://monet.cat:8080/')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);
    
  return (
    <section id="sup-first">
        <div>
            <h3>SUP</h3>
            <div className={style.productGrid}>
                {sups.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                <div className={style.moreCards}>...</div>
                {/* if para ver solo los productos que quiero segun type */}
            </div>
        </div>
    </section>
  );
}