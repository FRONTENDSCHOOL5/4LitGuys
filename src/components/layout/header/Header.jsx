import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import './menu.css'
import '../../../styles/reset.css'

const Header = () => {
  
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
    
    const toggleMenu = () => {
          setMenu(isOpen => !isOpen); // on,off 개념 boolean
      }


    return (
        <section className="sectionHeader">            
            <div className='headerWrap'>
                <p className="headerMenu"onClick={()=>toggleMenu()}>Shop</p>                 
                <img className='mainLogoW' src="/images/main_logo_white.png" alt="자크뮈스로고" />
                <p className="headerBag">Bag <span>0</span> </p>
            </div> 
            <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                <li>COLLECTION </li>
                <li>PRODUCT </li>
                <li>Q&A</li>
            </ul>                    
        </section>
    )
}  

export default Header


