import React from 'react'
import styles from './portfolio.module.css'

const Portfolio = function(props) {
  const handleLeftClick = function () {
    window.location.href = "https://github.com/happymealseller/js-game-video-poker"
  }

  const handleRightClick = function () {
    window.location.href = "https://github.com/happymealseller/js-game-maplestory-omok"
  }

  return (<React.Fragment> 
    <div className={styles.background}>
      <div onClick={handleLeftClick} className={styles.left}>        
          <img className={styles.img} src="./img/portfolio-poker.png" alt="project-img"/>           
      </div>
      <div onClick={handleRightClick} className={styles.right}>       
          <img className={styles.img} src="./img/portfolio-omok.png" alt="project-img"/>            
      </div>
   </div>
  </React.Fragment>)  
}

export default Portfolio