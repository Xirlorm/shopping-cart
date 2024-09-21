import { Link } from 'react-router-dom'
import styles from '../styles/components.module.css'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

function Header() {
  return <header aria-label="header" className={styles.header}>
    <h1>Shopping Cart</h1>
    <nav>
      <li>
        <Link aria-label='home' to='/'>
          <HomeIcon className={styles.headerIcon} />
        </Link>
      </li>
      <li>
        <Link aria-label='shop' to='/shop'>
          <ShoppingBagIcon className={styles.headerIcon} />
        </Link>
      </li>
      <li>
        <Link aria-label='cart' to='/cart'>
          <ShoppingCartIcon className={styles.headerIcon} />
        </Link>
      </li>
    </nav>
  </header>
}

export default Header