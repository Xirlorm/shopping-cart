import { Link } from "react-router-dom";
import styles from "../styles/App.module.css";
import { useEffect, useState } from "react";
import fetchData from "../utilities/utilities";
import { product } from "../utilities/types";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";
import ProductList from "../components/ProductList";

function Home() {
  const [hotdeals, setHotDeals] = useState([] as Array<product>);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    (function () {
      fetchData("products?limit=10")
        .then((items) => {
          if (!ignore && !(items instanceof Error)) {
            setHotDeals(items);
            setError(false);
          } else {
            setError(true);
          }
        })
        .catch(() => setError(true));
    })();

    return () => {
      ignore = true;
    };
  }, []);

  if (!hotdeals && !error) return <Loader />;
  if (error) return <ErrorMsg />;

  return (
    <section className={styles.home}>
      <section className={styles.banner}>
        <section className={styles.hero}>
          <p className={styles.heroText}>
            All your needs in one place, at the push of a button.
          </p>
        </section>
        <section>
          <Link to="shop">
            <button className="get-started-btn">Get started</button>
          </Link>
          <p>
            <i>Shopping from anywhere and at any time.</i>
          </p>
        </section>
      </section>
      <ProductList
        title="Top deals"
        products={hotdeals as product[]}
        className="top-deals"
      />
    </section>
  );
}

export default Home;
