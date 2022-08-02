import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from '../components/Counter';
import Home from '../components/Home';
import NavBar from '../components/NavBar';


const AppRouters = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/counter' element={<Counter/>}/>
         
        </Routes>
       </BrowserRouter>
    );
};

export default AppRouters;