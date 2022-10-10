import React from 'react'
import Navbar from '../Navbar'
import Splash from '../Splash'
import Portfolio from '../Portfolio'
import Carousel from '../Carousel'
import Content from '../Content'
import SkillCard from '../cards/SkillCard'
import AcadamicCard from '../cards/AcadamicCard'
import {academicRecords, skillRecords, textRecords} from '../../database'

const Home = function() {  
  return (
    <React.Fragment>   
      <div id="top"/>        
      <Splash >
        <Navbar/>
      </Splash>  
      <div id="bottom"/>
      <Carousel type={"short"} title={"Familiar\n With"} records={skillRecords} cardType={SkillCard}/>            
      <Content records={textRecords}/>       
      <Portfolio/>      
      <Carousel records={academicRecords} cardType={AcadamicCard}/>          
    </React.Fragment>
  );
}

export default Home;