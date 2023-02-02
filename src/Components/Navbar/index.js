import React, { useEffect, useRef, useState} from 'react'
import './style.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar(props) {
  const [menu, setmenu] = useState(false);
  const myNav = useRef();
  const myLogo = useRef();
  const myList = useRef();
  const bgColor = props.backGround;
  const textColor = props.textColor;
  useEffect(()=>{
    myNav.current.style.backgroundColor = bgColor;
    if (bgColor === 'white')
      myNav.current.style.boxShadow = `0 0 60px 1px rgba(0, 0, 0, 0.10)`;
    else myNav.current.style.boxShadow = `0 0 0 0 black`;
    myLogo.current.style.color = textColor;
    myList.current.style.color = textColor;
  }, [bgColor, textColor])
 

  function toggleIcon(){
    const primaryNav = document.querySelector(".primary-navigation");
    const primaryHeader = document.querySelector(".primary-header");
    if(menu){
      setmenu(false);
    }
    else{
      setmenu(true);
    }
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
    console.log(menu);  
  }
  

  return (
    <>
      <header className="primary-header">
        <div className="container mobile-width">
          <div className="nav-wrapper" id='nav-wrapper' ref={myNav}>
            <div className="logo" ref={myLogo}>
              <img src={require('../assets/images/logo1.png')} alt="Manage" />
              <p>Cakepool</p>
            </div>
            {menu?<button onClick={toggleIcon} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
              
              <CloseIcon className="icon-close" aria-hidden="true"/>
              {/* <MenuIcon className="icon-hamburger" aria-hidden="true" /> */}
              <span className="visually-hidden">Menu</span>
            </button>
            :<button onClick={toggleIcon} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
              {/* <CloseIcon className="icon-close" aria-hidden="true" /> */}
              <MenuIcon className="icon-hamburger" aria-hidden="true" />
              <span className="visually-hidden">Menu</span>
            </button>}
            <nav className="primary-navigation">
              <ul className="nav-list" aria-label="Primary" id="primary-navigation" ref={myList}>
                <li>About Us</li>
                <li>Tokenomics</li>
                <li>Future</li>
                <li>WhitePaper</li>
              </ul>
            </nav>
            <button  className="button display-sm-hidden display-md-inline-flex">Buy Now</button>
          </div>
        </div>
      </header>
    </>
  )
}
