// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Astros from './Components/Astros/Astros';
import Apod from './Components/Apod/Apod';
// import Appbar from './Components/Appbar/Appbar';
import { Route, Routes } from 'react-router-dom';
import './App.css'

//Constante de Login
const isLogged = true;
//Guardamos en localStorage
// localStorage.setItem('login', isLogged);


const userData = {
  name: 'Iván',
  age: '26'
}

// link para Personas en el espacio
// link para API NASA
// logo / link para login o para ver perfil

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

// Navbar --------------

// Main --- ruta: /
// Astros --- ruta: /astros
// APOD --- ruta: /apod

function App() {
  
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  },[isLogged]);

  return (
    <>
      {/* <Appbar /> */}
      <Navbar 
      links = {links}
      isLogged={JSON.parse(localStorage.login)}
      
      />

      <Routes>
        <Route 
        path='/' 
        element={<Main {...userData} />} 
        />
        <Route 
        path='/astros' 
        element={<Astros />} 
        />
        <Route
        path='/apod'
        element={<Apod />}
        />
      </Routes>
    </>
  )
}

export default App
