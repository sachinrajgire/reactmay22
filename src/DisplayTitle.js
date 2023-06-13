import logo from './logo.svg';
import './App.css';

//state //props
// Conditional Rendering

function DisplayTitle(props) {

console.log(props,'props');
const {myName,amIcrazy,fav,getMyFullName}=props

  return (
    <div className="App">
 
     <h1 >{`My name is ${myName}`}</h1>
    
    
    
    </div>
  );
}

export default DisplayTitle;
