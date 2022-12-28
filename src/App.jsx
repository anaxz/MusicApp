import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './layouts/Header';
import { ArtistsList, SongsList } from "./components";

import './app.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route path='artists' element={<ArtistsList />}></Route>
        <Route path='song-list' element={<SongsList />}></Route>

        <Route path='*' element={<h1>404</h1>} ></Route>
        <Route index element={<ArtistsList />} ></Route>
      </Route>
    </Routes>
  );
}

export default App;
