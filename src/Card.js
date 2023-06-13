import { useCallback, useState } from 'react';
import './card.css';

//state //props
// Conditional Rendering

function Card(props) {
const {universityName,spec,gradYear,
    employer,jobTitle,careerUrl,fav,
    id,setFav}=props    

 function handleFav (id) {
     let copyFav= [...fav]
     const index =copyFav.indexOf(id);
     if (copyFav.indexOf(id) === -1) {
        copyFav.push(id);
      } else{
          copyFav.splice(index, 1); 
      }
      setFav(copyFav)
  
 }   
  return (
    <div 
    style={{borderColor:fav.includes(id) ?'green':'red'}} 
    className="card-container">
 
     <h1 >{universityName}</h1>
     <ul>
<li>{spec}</li> 
<li>{gradYear}</li>
<li>{employer}</li>

<button onClick={()=>handleFav(id)}>{fav.includes(id)? `UnFav` :`Fav`}</button>
     </ul>
     
    </div>
  );
}

export default Card;