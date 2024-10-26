import { useEffect, useState } from 'react';
import styles from '../styles/components.module.css'
import { fetchEcommerceData, scrollLeft, scrollRight } from '../lib/utilities';
import Category from './Category';
import { ArrowLeft, ArrowRight } from 'react-feather';

function CategoryList() {
  const [categories, setCategories] = useState([] as string[]);

  useEffect(() => {
    let flag = true;

    (() => {
      fetchEcommerceData('products/categories').then(list => {
        if (flag) {
          setCategories(list)
          flag = false;
        } 
      })
    })();

    return () => { flag = false };
  }, []);

  scrollRight('.home .categories')
  
  return (
    <section className={styles.categoriesList + ' categories'}>
      <h3>What are you looking for?</h3>
      <div>
        <button className={styles.arrowBtn} onClick={() => scrollLeft('.categories > div')}>
          <ArrowLeft />
        </button>
        {categories.map((category) => {
          return <Category key={category} details={category}/>
        })}
        <button className={styles.arrowBtn} onClick={() => scrollRight('.categories > div')}>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

export default CategoryList
