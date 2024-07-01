import styled from 'styled-components'
import styles from './styles/App.module.css'
import { Outlet, Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/20/solid'
import Logo from './assets/icons8-shopping-bag-96.png'

const LogoElement = styled.h1`
  font-weight: 900;
  font-family: sans-serif;
  color: white;
  margin: 0.5em;
  font-style: italic;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  color: tomato;
  text-align: center;
`

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to='/'>
          <LogoElement className={styles.logoElement}>
            <img src={Logo} alt='' />
            Shop Bag
          </LogoElement>
        </Link>
        <Nav>
          <div className={styles.navLinks}>
            <Link to='/'>home</Link>&nbsp;
            <Link to='shop'>shop</Link>&nbsp;
          </div>
          <Link to='account'><UserIcon className='icon' /></Link>
          <Link to='cart'><ShoppingCartIcon className='icon'/></Link><br />
        </Nav>
      </div>
      <Outlet />
    </div>
  )
}

export default App
