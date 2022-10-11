import React from 'react'
import {useState} from 'react'
import styles from './content.module.css'

const Page = function(props) {  
  const [story, setStory] = useState(props.records[0].paragraph)  
  const [img, setImg] = useState(props.records[0].img)

  const handleClick = function () {    
    if (story === props.records[0].paragraph){
      setStory(props.records[1].paragraph)
      setImg(props.records[1].img)
    }
    else if (story === props.records[1].paragraph) {
      setStory(props.records[2].paragraph)
      setImg(props.records[2].img)
    }
    else {
      setStory(props.records[0].paragraph)
      setImg(props.records[0].img)      
    }
  }

  return (<React.Fragment> 
    <div className={styles.background} >
      <div className={styles.left}>
        <img className={styles.photo} src={img} alt="tumbnail"></img>
      </div>

    <div className={styles.right}>  
      <p className={styles.text}>{story}</p>
      <button className={styles.next} onClick={handleClick}>►</button> 
    </div>  
   </div>
  </React.Fragment>)  
}

export default Page