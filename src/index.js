import './styles/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header/Header';
import HamMenu from './components/layout/header/HamMenu';
import Footer from './components/layout/footer/Footer';
import About from './components/about';
import Collection from './components/collection';
import ItemList from './components/itemList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <HamMenu />
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/collection' element={<Collection />}></Route>
            <Route path='/item-list' element={<ItemList />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
);

