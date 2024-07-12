import { useEffect, useState } from "react";
import fetchData from "../utilities/utilities";
import Loader from "../components/Loader";
import Category from "../components/Category";
import styles from "../styles/App.module.css";
import ErrorMsg from "../components/ErrorMsg";

function Shop() {
  const [categories, setCategories] = useState([] as string[]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    (() => {
      fetchData("products/categories")
        .then((data) => {
          if (!ignore && !(data instanceof Error)) {
            setCategories(data as string[]);
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

  if (categories.length === 0 && !error) return <Loader />;
  if (error) return <ErrorMsg />;

  return (
    <div className={`shop ${styles.shop}`}>
      {categories.map((item) => (
        <Category category={item} key={item} />
      ))}
    </div>
  );
}

export default Shop;
