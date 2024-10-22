import Banner from '../components/Banner';
import styles from '../styles/app.module.css';

function Home() {

  return (
    <main className={styles.main + " home"}>
      <Banner />
    </main>
  )
}

export default Home
