import React from 'react' 
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss';  


function Header() {
  return(
    <header className='header'>
      <div className='header-container'>
        <div className='header-container__logo-wrapper'>
          
          <Link to={'/'}><img className='header-container__logo' src={logo} alt="BrainFlix logo" /></Link>
          
        </div>
        <div className='ip-up-av-wrapper'>
            <div className='ip-up-av-wrapper__sub-wrapper'>
                <div className='ip-up-av-wrapper__ip-av-container'>
                  <input className='ip-up-av-wrapper__input' type="text" placeholder='Search' />
                  <img className='avatar-mobile-view' src={avatar} alt="avatar" />

                </div>
                <Link to={'/upload'}><button className='btn' type="submit">UPLOAD</button></Link>
            </div>
            <img className='avatar-tablet-view' src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header