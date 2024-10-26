import Product from "./Product";
import styles from "../styles/components.module.css"
import { ProductType } from "../lib/types";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useEffect, useState } from "react";
import { fetchEcommerceData, scrollLeft, scrollRight } from "../lib/utilities";

interface productListArg {
  category: string,
}

function ProductList({ category }: productListArg) {
  const [products, setProducts] = useState([]);
  const className = category.replace('\'', '').replace(' ', '-');
  console.log(className)

  useEffect(() => {
    let flag = true;

    (() => {
      fetchEcommerceData('products/category/' + category).then(list => {
        if (flag) {
          setProducts(list)
          flag = false;
        } 
      })
    })();

    return () => { flag = false };
  }, [category]);

  return (
    <section className={`${styles.productList} ${className}`}>
      <h3>{category}</h3>
      <div>
        <button className={styles.arrowBtn} onClick={() => scrollLeft(`.shop .${className} > div`)}>
          <ArrowLeft />
        </button>
        {products.map((product: ProductType) => {
            return <Product key={product.id} product={product} />
        })}
        <button className={styles.arrowBtn} onClick={() => scrollRight(`.shop .${className} > div`)}>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

export default ProductList
