import { ChevronLeft, ChevronRight } from "react-feather";
import Product from "./Product";
import styles from "../styles/App.module.css";
import { product } from "../utilities/types";

function ProductList({
  products,
  className,
  title,
}: {
  products: product[];
  className: string;
  title: string;
}) {
  const leftScroll = () => {
    const slide: HTMLElement | null = document.querySelector(
      `.${className} .items`
    );

    if (slide) {
      slide.scrollLeft =
        slide.scrollLeft == 0
          ? slide.scrollWidth
          : (slide.scrollLeft - slide.offsetWidth) % slide.scrollWidth;
    }
  };

  const rightScroll = () => {
    const slide: HTMLElement | null = document.querySelector(
      `.${className} .items`
    );

    if (slide) {
      slide.scrollLeft =
        (slide.scrollLeft + slide.offsetWidth) % slide.scrollWidth;
    }
  };

  return (
    <section className={`${className} ${styles.productList}`}>
      <h3>{title}</h3>
      <section>
        <button
          onClick={leftScroll}
          className={`${styles.scrollBtn} ${styles.scrollLeft}`}
        >
          <ChevronLeft size={20} />
        </button>
        <section className={`items ${styles.items}`}>
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

export default ProductList;
