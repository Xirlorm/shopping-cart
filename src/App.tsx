import styles from './styles/App.module.css'
import { Outlet, Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/20/solid'
import Logo from './assets/icons8-shopping-bag-96.png'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <Link to='/'><img src={Logo} alt='Site logo' />Shop-Bag</Link>
        </h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='shop'>Shop</Link>
          <Link to='account'>
            <UserIcon className={styles.icon} aria-label='User icon' />
          </Link>
          <Link to='cart'>
            <ShoppingCartIcon className={styles.icon} aria-label='Cart icon' />
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default App
