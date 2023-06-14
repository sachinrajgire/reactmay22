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

function getData () {
  return rawData.map(i=>{
    return {...i,id:uuidv4(),isFav:false}
   })
}



function App() {

// const names =[
//   {id:1,
//   name:"sachin"},
//   isFav:false
//   {id:2,
//   name:"Sai"},
//   {id:3,
//   name:"Bishesh"},

// ]
// const myfav=[1,2]

// let filtered = names.filter(i=>{
//   if(myfav.includes(i.id)){
//     return true
//   }
//   return false
// })
// .map(j=>{
//   return j.name
// })
// .join (" ,")



// console.log(filtered,'filtered');


  const [fav, setFav] =useState([])
  const [data, setData] = useState(getData())

  // Set the isFav variable directly on data and
  //

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
