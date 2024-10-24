import { useEffect, useState } from 'react';
import { CategoryType } from '../lib/types';
import styles from '../styles/components.module.css'
import { getCategories } from '../lib/utilities';
import Category from './Category';
import { ArrowLeft, ArrowRight } from 'react-feather';

function CategoryList() {
  const [categories, setCategories] = useState([] as CategoryType[]);

  useEffect(() => {
    let flag = true;

    (() => {
      getCategories().then(list => {
        if (flag) {
          setCategories(list)
          flag = false;
        } 
      })
    })();

    return () => { flag = false };
  }, []);

  const scrollRight = () => {
    const categories: HTMLElement | null = document.querySelector('.home .categories > div');
    if (categories !== null) {
      categories.scrollBy({left: categories.offsetWidth, behavior: 'smooth'})
    }
  }

  const scrollLeft = () => {
    const categories: HTMLElement | null = document.querySelector('.home .categories > div');
    if (categories !== null) {
      categories.scrollBy({left: -categories.offsetWidth, behavior: 'smooth'})
    }
  }

  return (
    <section className={styles.categoriesList + ' categories'}>
      <h3>What are you looking for?</h3>
      <div>
        <button className={styles.arrowBtn} onClick={scrollLeft}>
          <ArrowLeft />
        </button>
        {categories.map((details) => {
          return <Category key={details.id} details={details}/>
        })}
        <button className={styles.arrowBtn} onClick={scrollRight}>
          <ArrowRight /></button>
      </div>
    </section>
  );
}

export default CategoryList
