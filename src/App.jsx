import NavBarComponent from './components/NavBarComponents/NavBarComponent'
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent'

function App() {
  

  return (    
    <>    
    <NavBarComponent />
    <ItemListContainerComponent greeting="Bienvenido a PatStore" />
    </>
  )
}

export default App
