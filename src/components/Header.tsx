import styles from '../styles/App.module.css'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/20/solid'
import Logo from '../assets/icons8-shopping-bag-96.png'
import { HomeIcon } from '@heroicons/react/20/solid'
import { BuildingStorefrontIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import AppContext from '../context'

function Header() {
  const {itemsInCart} = useContext(AppContext)

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <img src={Logo} alt='Site logo' />
        <h1>ShopHaven</h1>
      </Link>
      <nav>
        <Link to='/'>
          <HomeIcon className={styles.icon} aria-label='Home icon' />
        </Link>
        <Link to='shop'>
          <BuildingStorefrontIcon className={styles.icon} aria-label='Home icon' />
        </Link>
        <Link to='account'>
          <UserIcon className={styles.icon} aria-label='User icon' />
        </Link>
        <Link to='cart'>
          <ShoppingCartIcon className={styles.icon} aria-label='Cart icon' />
          <span>{itemsInCart}</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header