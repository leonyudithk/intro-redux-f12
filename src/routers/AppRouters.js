import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from '../components/AddProducts';
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
            <Route path='/add' element={<AddProducts/>}/>
        </Routes>
       </BrowserRouter>
    );
};

export default AppRouters;