import { useEffect, useState } from "react";
import { fetchEcommerceData } from "../lib/utilities";

interface CategoryArg {
  details: string,
}

function Category({details}: CategoryArg) {
  const [categoryProduct, setCategoryProduct] = useState();

  useEffect(() => {
    let flag = true;

    (() => {
      fetchEcommerceData('products/category/' + details).then(product => {
        if (flag) {
          setCategoryProduct(product[0])
          flag = false;
          console.log(categoryProduct)
        } 
      })
    })();

    return () => { flag = false };
  }, []);

  return (
    <div>
      <img src={categoryProduct?.image} alt="" />
      <h4>{details}</h4>
    </div>
  )
}

export default Category
