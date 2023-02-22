import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.css";
import React, { useEffect, useState } from 'react';


export function ProductGrid() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://monet.cat:8080/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
    
  return (
    <section id="sup-first" className={styles.ProductGrid}>
        <div>
            <h3>SUP</h3>
            <div class="flex">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  );
}