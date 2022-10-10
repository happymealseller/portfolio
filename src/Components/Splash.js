import React from 'react'
import styles from './splash.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Splash = function(props) {
  const faIcons = [faHtml5, faCss3, faJs, faReact, faNodeJs]
  const displayFaIcons = faIcons.map ((icon, index) => <FontAwesomeIcon className={styles.icon} key={index} icon={icon} />)

  return (<React.Fragment>     
   <div className={styles.background}>
    <div className={styles.logo}>      
      {props.children}
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 className={styles.summary}>  
            design and development skills, able to execute projects from wireframe to production.<br/>
            marketing background, understands the importance of ui/ux and how it influences human psychology.<br/>
            self-starter with an initiative to learn, keen eye for detail.<br/>
          </h3>      
        </div>        
        <div className={styles.right}>
          {displayFaIcons}
        </div>      
      </div>
    </div>
   </div>   
  </React.Fragment>)  
}

export default Splash