import React from 'react';
import Profile from './components/Profile';
import SongsList from './components/SongsList';

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

// npm run build after changes then
// npm run dev to start webpage
// if doesn't work try npm install the babel files

// added older node and changed config file to work with jsx