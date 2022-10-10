import React from 'react'
import styles from './navbar.module.css'

const Navbar = function(props) {
  return (<React.Fragment> 
    <div className={styles.background}>
      <div className={styles.logo}> <div className={styles.main}>HMS</div> <div className={styles.sec}>HAPPY<br/>MEAL<br/>SELLER</div> </div>      
      <div class={styles.nav}>
        <a href="#bottom">PORTFOLIO</a>
        <a href="./btan-cv.pdf" download>DOWNLOAD CV</a>  
      </div>
    </div>
  </React.Fragment>)  
}

export default Navbar