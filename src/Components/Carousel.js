import React from 'react'
import styles from './carousel.module.css'

const Carousel = function(props) {

  const displayRecords = props.records.map((record, index) => <props.cardType key= {index} record= {record}/>)

  return (<React.Fragment> 
   <div className={styles.background}>
    
    {props.type && 
    <div className={styles.left}>
      <h2> {props.title} </h2> 
    </div>}

    <div className={styles.right}>
      {displayRecords}
      {displayRecords}
    </div> 

   </div>
  </React.Fragment>)  
}

export default Carousel