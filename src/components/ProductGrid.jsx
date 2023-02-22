import { ProductCard } from "./ProductCard";
import style from "./ProductCard.module.css";
import React, { useEffect, useState } from 'react';


export function ProductGrid() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://monet.cat:8080/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
    
  return (
    <section id="sup-first">
        <div>
            <h3>SUP</h3>
            <div className={style.productGrid}>
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div></div>
        </div>
    </section>
  );
}