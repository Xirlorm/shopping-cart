import { useEffect, useState } from "react";
import { product } from "../utilities/types";
import fetchData from "../utilities/utilities";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import ProductList from "./ProductList";

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

  if (products.length === 0 && !error) return <Loader />;
  else if (error) <ErrorMsg />;

  return (
    <ProductList
      title={`${category}`}
      products={products as product[]}
      className={`${category}`}
    />
  );
}

export default Category;
