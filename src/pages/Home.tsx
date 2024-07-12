import { Link } from 'react-router-dom'
import styles from '../styles/App.module.css'
import { useEffect, useState } from 'react'
import fetchData from '../utilities/utilities'
import { product } from '../utilities/types';
import Loader from '../components/Loader';
import Product from '../components/Product';
import { ChevronRight, ChevronLeft } from 'react-feather';

function Home() {
  const [hotdeals, setHotDeals] = useState(null as (Array<product> | null));

  useEffect(() => {
    let ignore = false;

    (function () {
      fetchData('products?limit=10')
        .then((items: Array<product>) => {
          if (!ignore) setHotDeals(items)
        })
    })()

    return () => { ignore = true }
  }, [])

  if (!hotdeals) return <Loader />

  const leftScroll = () => {
    const hotDeals: HTMLElement | null = document.querySelector('.deals');

    if (hotDeals)
      hotDeals.scrollLeft = (hotDeals.scrollLeft == 0) ?
        hotDeals.scrollWidth :
        (hotDeals.scrollLeft - hotDeals.offsetWidth) % hotDeals.scrollWidth;
  }

  const rightScroll = () => {
    const hotDeals: HTMLElement | null = document.querySelector('.deals');

    if (hotDeals)
      hotDeals.scrollLeft = (hotDeals.scrollLeft + hotDeals.offsetWidth) %
      hotDeals.scrollWidth;
  }

  return (
    <section className={styles.home}>
      <section className={styles.banner}>
        <section  className={styles.hero}>
          <p className={styles.heroText}>
            All your needs in one place, at the push of a button.
          </p>
        </section>
        <section>
          <Link to='shop'>
            <button className='get-started-btn'>Get started</button>
          </Link>
          <p><i>Shopping from anywhere and at any time.</i></p>
        </section>
      </section>
      <section className={styles.hotdeals}>
        <h3>Hot deals</h3>
        <section>
          <button
            onClick={leftScroll}
            className={`${styles.scrollBtn} ${styles.scrollLeft}`}
          ><ChevronLeft size={20} /></button>
          <section className={`deals ${styles.items}`}>
            {hotdeals?.map(item => <Product details={item} />)}
          </section>
          <button
            onClick={rightScroll}
            className={`${styles.scrollBtn} ${styles.scrollRight}`}
          ><ChevronRight size={20} /></button>
        </section>
      </section>
    </section>
  )
}

export default Home
