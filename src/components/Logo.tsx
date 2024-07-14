import { Link } from "react-router-dom";
import styles from "../styles/App.module.css";
import LogoImg from "../assets/icons8-shopping-bag-96.png";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={LogoImg} alt="Site logo" />
      <h1>ShopHaven</h1>
    </Link>
  );
}

export default Logo;
