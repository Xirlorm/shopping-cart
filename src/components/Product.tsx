import PropTypes from 'prop-types'
import { product } from "../utilities/types";
import styles from '../styles/App.module.css'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

function Product(props: {details: product}) {
  return (
    <div className={styles.product}>
      <img src={props.details.image} alt="" />
      <h3>{props.details.title}</h3>
      <div>${props.details.price}</div>
      <section>
        <button><MinusIcon width={20}/></button>
        <p>0</p>
        <button><PlusIcon width={20}/></button>
      </section>
    </div>
  );
}

Product.propTypes = {
  details: PropTypes.object
}

export default Product;
