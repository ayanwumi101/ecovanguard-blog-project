import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './styles.module.css'
import {FaSearch} from 'react-icons/fa'
import avatar from './avatar.png'


const Navbar = () => {

  const [show, setShow] = useState(false);
  const showForm = () => {
     setShow(true)
  }

  const hideForm = () => {
    setShow(false)
  }

  return (
    <div className={styles.nav_container}>
        <div className={styles.brand}>
            <Link to='/'><img src={logo} alt="" /></Link>
        </div>


        <div className={styles.search_container}>
          <input type="text" placeholder='Search for topics, locations & resources' />
          <FaSearch className={styles.search_icon}/>
        </div>

        <div className={styles.user_icon}>
          <img src={avatar} alt="" className='avatar' />
        </div>

        {/* {show ? <form action="">
          <input type="text" placeholder='Search...' onMouseOut={hideForm} />
          <FaSearch className={styles.search_icon}/>
        </form> : <div className="icon_btn" onClick={showForm}>
          <button><FaSearch className={styles.input_icon} /></button>
        </div>} */}
        
    </div>
  )
}

export default Navbar