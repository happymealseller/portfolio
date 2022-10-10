import React from 'react'
import styles from './skillCard.module.css'

const SkillCard = function(props) {
  return (<React.Fragment> 
   <div className= {styles.background} style={{backgroundColor: `${props.record.bg}`}}>
    <h1>{props.record.title}</h1>
    <h2>{props.record.description}</h2>
   </div>
  </React.Fragment>)  
}

export default SkillCard