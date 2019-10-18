import React from 'react';
import './main.css';
import { MainView } from './main';
import { SearchView } from './search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Do the thing</h1>
        <SearchView />
      </header>
      <main className='container'>
        <MainView />
      </main>
      <small className="cp">Brought to you by <a href="https://moblimic.com">MobliMic</a> - Background CC <a
        href="https://www.flickr.com/photos/cretatus/">Richard Williams</a> - <a
        href="https://github.com/MobliMic/MobliTab">Github project</a></small>
    </div>
  );
}

export default App;
