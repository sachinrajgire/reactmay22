import logo from './logo.svg';
import './App.css';
import DisplayImage from './DisplayImage/DisplayImage.jsx';
import {useState,useEffect} from 'react'
import DisplayTitle from './DisplayTitle';
import rawData from './Student_Data.json';
import Carousel from './Carousel' ;
import Card from './Card' ;
import { v4 as uuidv4 } from 'uuid';

//state //props

// loop over data and show 

const data = rawData.map(i=>{
 return {...i,id:uuidv4()}
})


function App() {
  const [fav, setFav] =useState([])
  console.log(fav,'fav');
  

  return (
    <div>
      {data.map(i=>{
      const {University_Name,Specialization,Graduation_Year,Employer,
        Job_Title,Career_Url,id
      }  =i

      return(
        <Card 
        universityName={University_Name}
        spec={Specialization}
        gradYear={Graduation_Year}
        employer={Employer}
        jobTitle={Job_Title}
        careerUrl={Career_Url}
        fav ={fav}
        id={id}
        setFav={setFav}
        
        />
      )
        
      })}
      <Carousel />
    </div>
  )
}

export default App;
