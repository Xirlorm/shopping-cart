import { useEffect, useState } from "react";
import { fetchEcommerceData } from "../lib/utilities";
import ProductList from "../components/ProductList";

function Shop() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let flag = true;

    (() => {
      fetchEcommerceData('products/categories').then(list => {
        if (flag) {
          setCategories(list)
          flag = false;
        } 
      })
    })();

    return () => { flag = false };
  }, []);

  return (
    <main className="shop">
      {categories.map(
        category =>  <ProductList category={category} key={category} />
      )}
    </main>
  );
}

export default Shop
