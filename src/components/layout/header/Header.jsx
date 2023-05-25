import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css'



    const Header = () => {
    
        const [open, setOpen] = useState(false);
        const [visible, setVisible] = useState(false);   
    
    
    return (
        <section className="sectionHeader">            
            <div className='headerWrap'>  
                <p className="headerMenu" onClick={()=>toggleMenu()}> // 클릭되었을 때 준비한 함수 호출!
                <img className='hamMenu' src="/images/main_menuBar.png" alt="메뉴" />
                    Shop
                </p>                 
                <img className='mainLogo' src="/images/main_logo_white.png" alt="자크뮈스로고" />
                <p className="headerBag">
                    Cart
                <span>0</span>  
                </p>
            </div>                
        </section>
    );
}  

export default Header


