import { useState } from 'react'
import FlashSale from '../assets/banner/Flash Sale Clipart Hd PNG, Flash Sale Banner With Loudspeaker Or Megaphone Template Design, Advertisement, Advertising, Buy PNG Image For Free Download.jpeg'
import ComingSoon from '../assets/banner/Free Vector _ Modern coming soon poster with stay tuned message.jpeg'
import HotSale from '../assets/banner/Hot Sale Banner This Weekend Only Template Download on Pngtree.jpeg'
import OrderNow from '../assets/banner/Order Now Vector Hd Images, Transparent Order Now Png, Order Now Banner, Speed Shape, Order Now Png Image PNG Image For Free Download.jpeg'
import SuperSale from '../assets/banner/Premium Vector _ Sale banner.jpeg'
import SpecialPromo from '../assets/banner/Special Promo Banner Design For Sale And Offer Vector, Special Promo, Special Promo Banner, Special Promotion Design PNG and Vector with Transparent Background for Free Download.jpeg'
import styles from '../styles/components.module.css'
import { Link } from 'react-router-dom'

function Banner() {
  const bannerImages = [
    ComingSoon,
    FlashSale,
    HotSale,
    OrderNow,
    SuperSale,
    SpecialPromo,
  ];
  const [index, setIndex] = useState(0);

  setTimeout(() => { setIndex((index + 1) % bannerImages.length) }, 3000);

  return <div className={styles.banner}>
    <img src={bannerImages[index]} className={styles.bannerImg} alt="Banner image" />
    <p>
      Quick delivery? <br />
      We've got you covered! <br />
      All your needs in one place <br />
      <Link to='/shop'>
        <button>Get shopping</button>
      </Link>
    </p>
  </div>
}

export default Banner
