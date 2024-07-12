import { useEffect, useState } from "react";
import { product } from "../utilities/types";
import fetchData from "../utilities/utilities";
import Product from "./Product";
import styles from "../styles/App.module.css";
import Loader from "./Loader";
import { ChevronLeft, ChevronRight } from "react-feather";
import ErrorMsg from "./ErrorMsg";

function Category({ category }: { category: string }) {
  const [products, setProducts] = useState([] as product[]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    (() => {
      fetchData(`products/category/${category}`)
        .then((data) => {
          if (!ignore && !(data instanceof Error)) {
            setProducts(data);
            setError(false);
          } else {
            setError(true);
          }
        })
        .catch(() => {
          setError(true);
        });
    })();

    return () => {
      ignore = true;
    };
  }, [category]);

  const leftScroll = () => {
    const hotDeals: HTMLElement | null = document.querySelector(
      `.${category} > section > section`
    );

    if (hotDeals) {
      hotDeals.scrollLeft =
        hotDeals.scrollLeft == 0
          ? hotDeals.scrollWidth
          : (hotDeals.scrollLeft - hotDeals.offsetWidth) % hotDeals.scrollWidth;
    }
  };

  const rightScroll = () => {
    const hotDeals: HTMLElement | null = document.querySelector(
      `.${category} > section > section`
    );

    if (hotDeals) {
      hotDeals.scrollLeft =
        (hotDeals.scrollLeft + hotDeals.offsetWidth) % hotDeals.scrollWidth;
    }
  };

  if (products.length === 0 && !error) return <Loader />;
  else if (error) <ErrorMsg />;

  return (
    <section className={`${category} ${styles.category}`}>
      <h3>{category}</h3>
      <section>
        <button
          onClick={leftScroll}
          className={`${styles.scrollBtn} ${styles.scrollLeft}`}
        >
          <ChevronLeft size={20} />
        </button>
        <section className={`${styles.items}`}>
          {products.map((item) => (
            <Product details={item} key={item.id} />
          ))}
        </section>
        <button
          onClick={rightScroll}
          className={`${styles.scrollBtn} ${styles.scrollRight}`}
        >
          <ChevronRight size={20} />
        </button>
      </section>
    </section>
  );
}

export default Category;
