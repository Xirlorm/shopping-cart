import { Link } from 'react-router-dom'
import styles from '../styles/App.module.css'
import { useEffect, useState } from 'react'
import fetchData from '../utilities/utilities'
import { Product } from '../utilities/types';
import Loader from '../components/Loader';

function Home() {
  const [hotdeals, setHotDeals] = useState(null as (Array<Product> | null));

  useEffect(() => {
    let ignore = false;

    (function () {
      fetchData('products?limit=5')
        .then((items: Array<Product>) => {
          if (!ignore) setHotDeals(items)
        })
    })()

    return () => { ignore = true }
  }, [])

  if (!hotdeals) return <Loader />

  return (
    <section className={styles.home}>
      <div  className={styles.hero}>
        <p className={styles.heroText}>
          All your needs in one place, at the push of a button.
        </p>
      </div>
      <section>
        <Link to='shop'><button className='get-started-btn'>Get started</button></Link>
        <p><i>Shopping from anywhere and at any time.</i></p>
      </section>
      {hotdeals?.map(item => {
        return <section>
            {JSON.stringify(item)}
            <br />
          </section>
      })}
    </section>
  )
}

export default Home
