import { Link, Outlet } from 'react-router-dom';
import styles from './styles/App.module.css'

function App() {
  return (
    <>
      <h1 className={`${styles.h1}`}>Shopping cart</h1>
      <Link to='/shop'>Shop</Link>
      <Outlet />
    </>
  )
}

export default App;
