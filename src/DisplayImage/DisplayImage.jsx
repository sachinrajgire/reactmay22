import './display-image.css'
import PropTypes from 'prop-types'
//state //props
// Conditional Rendering
// Reusable
function DisplayImage(props) {
    console.log(props);
const {url,height,width,isEven} =props
console.log(isEven,'isEven');

  return (
    <div style={{border:"200px"}} className={`di-container di-container-even`} >
    <img src={url} height={height} width={width}/>
    </div>
  );
}

export default DisplayImage;

DisplayImage.propTypes = {
  url: PropTypes.string.isRequired,
}

DisplayImage.defaultProps = {
  height: "2000px",
  width: "1000px",
}


//prop validation
// default props

// type ()
//typescript