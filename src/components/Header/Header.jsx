import React from 'react' 
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss';  


function Header() {
  return(
    <header className='header'>
      <div className='header-container'>
        <div className='header-container__logo-wrapper'>
          
          <img className='header-container__logo' src={logo} alt="BrainFlix logo" />
          
        </div>
        <div className='ip-up-av-wrapper'>
            <div className='ip-up-av-wrapper__sub-wrapper'>
                <div className='ip-up-av-wrapper__ip-av-container'>
                  <input className='ip-up-av-wrapper__input' type="text" placeholder='Search' />
                  <img className='avatar-mobile-view' src={avatar} alt="avatar" />

                </div>
                <button className='btn' type="submit">UPLOAD</button>
            </div>
            <img className='avatar-tablet-view' src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header