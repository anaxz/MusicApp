import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Header from './layouts/Header';
import { Test, ArtistsList, SongsList } from "./components";

import '../app.css';

function App() {
  // const [artists, setArtists] = useState([
  //   { 
  //       id: 0, name: 'LiSa', type: ['Anime', 'Punk'], country: 'Japan', 
  //       intro: 'Risa Oribe (織部 里沙, Oribe Risa, born June 24, 1987), better known by her stage name Lisa (stylized as LiSA), is a Japanese singer, songwriter and lyricist from Seki, Gifu, signed to Sacra Music under Sony Music Artists.',
  //       likes: 27
  //   }, 
  //   { 
  //       id: 1, name: 'Artist2', type: ['Rock', 'Punk'], country: 'area', 
  //       intro: 'dummy data dummy data v  dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data', 
  //       likes: 1
  //   }, 
  //   { 
  //       id: 2, name: 'Artist3', type: ['Pop', 'Punk'], country: 'area', 
  //       intro: 'dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data',
  //       likes: 0
  //   }
  // ]) 
  

  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route path='artists' element={<ArtistsList />}></Route>
        <Route path='song-list' element={<SongsList />}></Route>

        <Route path='*' element={<h1>404</h1>} ></Route>
        <Route index element={<Test />} ></Route>
        {/* <Route index element={<p>{testHook()}</p>} ></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
