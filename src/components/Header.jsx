import Brand from "../img/branding-image--landing-page@1x.svg";
import Logo from "../img/branding-image--white-font-trans-bg-png@2x.svg";
import Spaghetti from "../img/spaghetti-png@2x.svg";
import Wings from "../img/wings-png@2x.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="logo" className="logo" />
      <div className="content-container">
        <div className="logo-container">
        <img src={Wings} alt="wings" className="wings" />
        <img src={Brand} alt="brand" className='brand'/>
        <img src={Spaghetti} alt="spaghetti" className="spaghetti" />
        </div>
        <div className="brand-message-container">
      <h1>Help save local restaurants. It’s easier than you think!</h1>
      <h3>
        Do you constantly use third party ordering services like Grubhub,
        Doordash, and UberEats because of convience?
        <br />
        <br />
        Did you know these platforms take up to 30% profits everytime you place
        an order?
        <br />
        <br />
        Let us help you, help them!
      </h3>
      <button className='download-btn'>Download Now</button>
        </div>
      </div>
    </div>
  );
}
