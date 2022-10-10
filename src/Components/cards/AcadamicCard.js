import React from 'react'
import styles from './acadamicCard.module.css'

const EmploymentCard = function(props) {
  return (<React.Fragment> 
   <div className= {styles.background} style={{backgroundColor: `${props.record.bg}`}}>
    <div className={styles.left}>
        <img src={props.record.img} alt="tumbnail"></img>
    </div>

    <div className={styles.right}>     
      <p>{props.record.institution}</p>
      <p>{props.record.year}</p>
      <p>{props.record.certification}</p>
    </div> 
   </div>
  </React.Fragment>)  
}

export default EmploymentCard