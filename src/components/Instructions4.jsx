import Step_4 from "../img/how-it-works--image--4@1x.jpg";
// import { Link } from "react-router-dom";
import "../styles/Instructions.css";

export default function Instructions() {

  return (
    <div className="instructions-container">
      <div className="instructions-steps">
        <h1 className="title">How it works!</h1>
        <div className="step">
          <div className='circle'></div>
          <h3 className="text">1. Download our extension.</h3>
        </div>
        <br />
        <br />
        <div className="step">
          <div className='circle'></div>
          <h3 className="text">
            2. Go to place an order or search on a third party platform like
            Doordash or Grubhub.
          </h3>
        </div>
        <br />
        <br />
        <div className="step">
          <div className='circle'></div>
          <h3 className="text">
            3. We’ll notify you if the restaurant has it’s own site you can
            order from.
          </h3>
        </div>
        <br />
        <br />
        <div className="step">
          <div className='circle active'></div>
          <h3 className="text">
            4. If you’d like, we’ll reDIRect you to their site so you can order
            DIRectly from them and avoid any hidden charges for the restaurant.
          </h3>
          <button className='instructions-btn-final'>
            Download Now
          </button>
        </div>
      </div>
      <div className="instructions-image-container">
        <img src={Step_4} alt="step 1" className="instructions-image" />
      </div>
    </div>
  );
}
