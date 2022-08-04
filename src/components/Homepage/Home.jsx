import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.hero_text}>
            <div>
            <h1>Welcome to Ecovanguard's Blog</h1>
            
                <Link to='/posts'>
                  <button className={styles.home_button}>
                    <span>Proceed to blog</span>
                    <FaArrowRight/>
                  </button>
                </Link> 
            
            </div>
        </div>
    </div>
  )
}

export default Home