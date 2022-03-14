import React from 'react';
import './App.css';
import {RemoteWork} from './remoteWork/RemoteWork';
import {Header} from './header/Header';
import {Contacts} from './contacts/Contacts';
import {Skills} from './skills/Skills';
import {Footer} from './footer/Footer';
import {Projects} from './projeсts/Projects';
import {Main} from './main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <RemoteWork/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
