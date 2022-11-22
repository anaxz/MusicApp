import React from 'react';

import { Profile, SongsList } from "./components";

import '../app.css';

function App() {
  return (
    <main>
      <h1>Music App</h1>
      <Profile />
      <SongsList />
    </main>
  );
}

export default App;
