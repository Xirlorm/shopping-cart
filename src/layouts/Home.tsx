import { useEffect } from 'react';
import styles from '../styles/app.module.css';
import { getProducts } from '../lib/utilities';

function Home() {
  useEffect(() => {
    getProducts().then(data => console.log(data))
  })

  return (
    <main className={styles.main + " home"}>
      <h2>Home page</h2>
    </main>
  )
}

export default Home
