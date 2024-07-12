import PropTypes from 'prop-types'
import { product } from "../utilities/types";
import styles from '../styles/App.module.css'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

function Product(props: {details: product}) {
  return (
    <div className={styles.product}>
      <img src={props.details.image} alt="" />
      <h3>{props.details.title}</h3>
      <div>${props.details.price}</div>
      <section>
        <button><ChevronDownIcon width={22}/></button>
        <p>0</p>
        <button><ChevronUpIcon width={22}/></button>
      </section>
    </div>
  );
}

Product.propTypes = {
  details: PropTypes.object
}

export default Product;
