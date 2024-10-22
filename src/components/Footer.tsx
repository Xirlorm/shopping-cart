import { Facebook, Instagram, Twitter } from 'react-feather'
import styles from '../styles/components.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer aria-label="footer" className={styles.footer}>
        <section>
          <h1 className={styles.logo}>Super sales</h1>
          <h3>Join Our Newsletter</h3>
          <p>
            Get E-mail updates about our latest products and special offers.
          </p>
          <form>
            <input
              type="email"
              autoComplete="true"
              name="email"
              placeholder="Enter your email"
            />
            <input type="submit" value="SUBSCRIBE" />
          </form>
        </section>
        <section>
          <div>
            <h3>Get shopping</h3>
            <ul>
              <li>
                <Link to="">Our products</Link>
              </li>
              <li>
                <Link to="">My cart</Link>
              </li>
              <li>
                <Link to="">Login/Register</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Terms and conditions</Link>
              </li>
              <li>
                <Link to="">Privacy policy</Link>
              </li>
              <li>
                <Link to="">Payment methods</Link>
              </li>
              <li>
                <Link to="">Shipping</Link>
              </li>
              <li>
                <Link to="">Delivery</Link>
              </li>
              <li>
                <Link to="">Help</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <h3>Get social</h3>
            <ul>
              <li>
                <Link to="">
                  <Facebook className={styles.icons} /> Facebook
                </Link>
              </li>
              <li>
                <Link to="">
                  <Twitter className={styles.icons} /> Twitter
                </Link>
              </li>
              <li>
                <Link to="">
                  <Instagram className={styles.icons} /> Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>
                Telephone: <a href="tel:+000000000000">+000000000000</a>
              </li>
              <li>
                Email: <a href="mailto:n0n3x1s73n7">nonexistent@gmail.com</a>
              </li>
              <li>
                Address: <address>Abxy Road, Location</address>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer
