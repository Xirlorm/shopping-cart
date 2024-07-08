import styles from '../styles/App.module.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons8-shopping-bag-96.png'
import { Facebook, Instagram, Twitter } from 'react-feather'

function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.contact}>
          <h3>Need help?</h3>
          <ul>
            <li><Link to=''>Chat with us</Link></li>
            <li><Link to=''>Help Center</Link></li>
            <li><Link to=''>Contact us</Link></li>
            <li><Link to=''>FAQ</Link></li>
            <li><Link to=''>Email us</Link></li>
            <li><Link to=''>Your account</Link></li>
          </ul>
        </section>
        <section>
          <h3>Get to know us</h3>
          <ul>
            <li><Link to=''>About ShopHaven</Link></li>
            <li><Link to=''>Blogs</Link></li>
            <li><Link to=''>Careers</Link></li>
            <li><Link to=''>Investor relations</Link></li>
          </ul>
        </section>
        <section className={styles.socialHandles}>
          <div>
            <h3>Join us on</h3>
            <ul>
              <li><Link to=''><Facebook size={24} /> Facebook</Link></li>
              <li><Link to=''><Twitter size={24} /> Twitter</Link></li>
              <li><Link to=''><Instagram size={24} /> Instagram</Link></li>
            </ul>
          </div>
        </section>
        <section className={styles.payment}>
          <h3>Payment methods</h3>
          <ul>
            <li><Link to=''>VISA</Link></li>
            <li><Link to=''>Mastercard</Link></li>
          </ul>
        </section>
        <section>
          <Link to='/' className={styles.logo}>
            <img src={Logo} alt='Site logo' />
            <h1>ShopHaven</h1>
          </Link>
          <span>©2024, ShopHaven inc</span>
        </section>
      </footer>
  )
}

export default Footer