import { ProductType } from "../lib/types"
import styles from '../styles/components.module.css'

interface ProductArg {
  product: ProductType
}

function Product({product}: ProductArg) {
  return (
    <div className={styles.product}>
      <img src={product.image} alt="" />
      <div>
        <h4>{product.title}</h4>
        <li>${product.price}.00</li>
      </div>
    </div>
  );
}

export default Product
  