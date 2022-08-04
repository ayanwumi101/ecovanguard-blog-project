import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './styles.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
        <div className={styles.brand}>
            <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <ul>
            <Link to='/posts'><li>Posts</li></Link>
        </ul>
    </div>
  )
}

export default Navbar