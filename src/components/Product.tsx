import { Minus, Plus } from "react-feather";
import { ProductType } from "../lib/types"
import styles from '../styles/components.module.css'
import { useState } from "react";

interface ProductArg {
  product: ProductType
}

function Product({product}: ProductArg) {
  let [amountPicked, setAmountPicked] = useState(0);

  return (
    <div className={styles.product}>
      <img src={product.image} alt="" />
      <div>
        <h4>{product.title}</h4>
        <li>${product.price}.00</li>
        <div className={styles.addToCart + " addToCart"}>
          <button onClick={() => {setAmountPicked(val => val + 1)}}>
            <Plus />
          </button>
          <input type="number" placeholder="0" value={amountPicked} />
          <button onClick={() => {setAmountPicked(val => val > 0 ? val - 1 : val)}}>
            <Minus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product
  