import React from 'react';

import { ArtistsList, SongsList } from "./components";

import '../app.css';

function App() {
  return (
    <main>
      <h1>Music App</h1>
      <ArtistsList />
      <SongsList />
    </main>
  );
}

export default App;
