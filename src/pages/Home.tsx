import { Link } from 'react-router-dom'
import styles from '../styles/App.module.css'

function Home() {
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
    </section>
  )
}

// With less, get more

export default Home
