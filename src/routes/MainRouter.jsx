import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Item from "../pages/Item"
import Category from "../pages/Category"
import PaginaPrueba from "../pages/PaginaPrueba"
import Tarea from "../pages/Tarea"
import NavBarComponent from "../components/NavBarComponents/NavBarComponent"
import { useState } from "react"

const MainRouter = () => {
    
    return (
        
        <BrowserRouter>
        <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:id" element={<Item/>} />
                <Route path="/category/:id" element={<Category/>} />
                <Route path="/PaginaPrueba" element={<PaginaPrueba/>} />
                <Route path="/Tarea" element={<Tarea/>}/>
            </Routes>    
        </BrowserRouter>
    )
}

export default MainRouter