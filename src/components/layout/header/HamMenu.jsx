import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './hammenu.css'

    function HamMenu() {
    return (
           
            <div className="menuWrap">
                <div className='menuDown'>
                    <p className="hamberText">
                    <img className='hamberMenu' src="/images/main_menuBar.png" alt="메뉴" />
                        Shop
                    </p>                 
                    <img className='mainLogo' src="/images/main_logo_white.png" alt="자크뮈스로고" />
                    <p className="hamberBag">
                        Cart
                    <span>0</span>  
                    </p>
                </div>
                <ul className='hamSubMenu'>       
                    <li>Collection</li>
                    <li>New arrival</li>
                    <li>Woman</li>
                    <li>Man</li>
                    <li>Bags</li>
                </ul>
            </div>
    );
} 

export default HamMenu
