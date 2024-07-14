import styles from "../styles/App.module.css";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/20/solid";
import { BuildingStorefrontIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import AppContext from "../context";
import Logo from "./Logo";

function Header() {
  const { itemsInCart } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <Link to="/">
          <HomeIcon className={styles.icon} aria-label="Home icon" />
        </Link>
        <Link to="shop">
          <BuildingStorefrontIcon
            className={styles.icon}
            aria-label="Home icon"
          />
        </Link>
        <Link to="account">
          <UserIcon className={styles.icon} aria-label="User icon" />
        </Link>
        <Link to="cart">
          <ShoppingCartIcon className={styles.icon} aria-label="Cart icon" />
          {itemsInCart !== 0 && (
            <sub className={styles.itemsInCart}>{itemsInCart}</sub>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
