import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Header from './layouts/Header';
import { ArtistsList, SongsList } from "./components";

import useTest from './customHooks/useTest';
import { useWindowSize } from './customHooks'

import '../app.css';

function testHook(){
  const device = useWindowSize();
  console.log(device.height)
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route path='artists' element={<ArtistsList />}></Route>
        <Route path='song-list' element={<SongsList />}></Route>

        <Route path='*' element={<h1>404</h1>} ></Route>
        {/* <Route index element={<p>{testHook()}</p>} ></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
