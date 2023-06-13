import logo from './logo.svg';
import './App.css';
import DisplayImage from './DisplayImage/DisplayImage.jsx';
import {useState,useEffect} from 'react'
import DisplayTitle from './DisplayTitle';
import data from './Student_Data.json';
import Carousel from './Carousel' ;
console.log(data ,'data');
//state //props

// loop over data and show 

function App() {

  return (
    <div>
      <Carousel />
    </div>
  )
}

export default App;
