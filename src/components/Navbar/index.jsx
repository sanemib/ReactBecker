import styles from './navbar.module.scss'
import img from "../../img/home.png"
import CartWidget from '../CartWidget'
import MenuContainer from '../MenuContainer'
import SwitchMode from '../SwitchMode'
import { Link } from 'react-router-dom'
import Categories from '../Categories'

function Navbar() {

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
          <div className={styles.home}>
              <Link to="/" className={styles.homeA}>
                  <img src={img} alt="home.png" className={styles.homeImg} /> <h1 className={styles.h1}>Winchester</h1> <p className={styles.tp}>Tienda de venta de tecnología</p>
              </Link>
          </div>
          {/* <SwitchMode/> */}
          {/* <MenuContainer/> */}
          <Link to="/cart">
            <CartWidget/>
          </Link>
      </div>
      <Categories/>
    </nav>
  )
}



export default Navbar