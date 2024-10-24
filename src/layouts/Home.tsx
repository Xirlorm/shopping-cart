import Banner from '../components/Banner';
import styles from '../styles/app.module.css';
import CategoryList from '../components/CategoryList';

function Home() {

  return (
    <main className={styles.main + " home"}>
      <Banner />
      <CategoryList />
    </main>
  );
}

export default Home;
