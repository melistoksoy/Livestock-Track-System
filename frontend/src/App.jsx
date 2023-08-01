import { useState } from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Profile from './Profile';
import Animals from './Animals';
import AddAnimal from './AddAnimal';
import Vacc from './Vacc';
import Vet from './Vet';
import Home from './Home'
import Cons from './Cons';

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/kayıt" element={<Register />} />
        <Route path="/profile" element={<Profile />} >
           <Route path='/profile/home' element={<Home />}></Route>
          <Route path="/profile/animals" element={<Animals />}></Route>
          <Route path='/profile/addanimal' element={<AddAnimal />}></Route>
          <Route path='/profile/vacc' element={<Vacc />} ></Route>
          <Route path='/profile/vet' element={<Vet />} ></Route>
          <Route path='/profile/cons' element={<Cons />} ></Route>
        </Route>




      </Routes>
    </BrowserRouter>


  )
}

export default App
