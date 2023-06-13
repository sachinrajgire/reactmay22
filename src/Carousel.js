import logo from './logo.svg';
import './App.css';
import DisplayImage from './DisplayImage/DisplayImage.jsx';
import {useState,useEffect} from 'react'
import DisplayTitle from './DisplayTitle';
import data from './Student_Data.json'
console.log(data ,'data');
//state //props

// loop over data and show 

function Carousel() {
const urlArr= [
 "https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
 'https://images.unsplash.com/photo-1685973323988-666a38e0acc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
 'https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
]
const [currentUrl,setCurrentUrl] = useState(0)
const [counter,setCounter] = useState(0)
console.log((currentUrl+1) %2 === 0 ,'OODDDDDD');

const isNextDisabled = currentUrl === urlArr.length - 1
const isPrevDisabled = currentUrl <=0 

function handleNext () {
  currentUrl === urlArr.length - 1 
   ? setCurrentUrl(0) 
   : setCurrentUrl(currentUrl+1)
}
function handlePrev () {
  currentUrl <=0 
   ? setCurrentUrl(urlArr.length-1) 
   : setCurrentUrl(currentUrl-1) 
}
// useEffect(()=>{
//  console.log('I will run anytime anything change, useEFFECT ');
// })
useEffect(()=>{
 console.log('I will run anytime dependency in second field changes, useEFFECT ');
 // ComponentDidMount
 // Use to make network call
},[])
useEffect(()=>{
 console.log('RUN THIS ONLY WHEN COUNTER CHANGES , NOT WHEN CURRENTURL , useEFFECT ');
 // ComponentDidMount
 // Use to make network call
},[counter])


//Network Call- Api request, fetching data, ( loading,error( time out), authoziztion )
//Side Effects 
// React Trigger Conti

//When you are at last slide --You will prompt user -- that he is at the last slide 

  return (
    <div>
     {/* {
       currentUrl === 0 
       ? <h1>I am on zero</h1>
       : null
     } */}
     {counter}
     <button  onClick={()=>setCounter(counter+1)}> Counter ++</button>


     {
       currentUrl === 0 && 5+5===1 && <h1>I am on zero</h1>
     }
   
     <DisplayTitle myName={isNextDisabled ? "Disable" : "Not Disabled"} />
  
      
      <DisplayImage 
      url={urlArr[currentUrl]}
      isEven={(currentUrl+1) %2 === 0}
    
      />
      <button  onClick={()=>handleNext()}> Next</button>
      <button  onClick={()=>handlePrev()}> Previous</button>
    
   </div>
  
  );
}

export default Carousel;
