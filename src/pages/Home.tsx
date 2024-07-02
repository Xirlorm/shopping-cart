import styles from '../styles/App.module.css'

function Home() {
  return (
    <section className={styles.home}>
      <p className="banner-text">
        <i>Shopping</i> from anywhere and everywhere...
      </p>
      <div>
        <button className='get-started-btn'>Get started</button>
        <p>Shopping just a click away from your needs.</p>
      </div>
    </section>
  )
}

export default Home
