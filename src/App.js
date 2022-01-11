import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import CubeOfTruth from './components/Cube/CubeOfTruth';
import HeroList from './components/HeroList/HeroList';
import Hero from './components/Hero/HeroPage';
import TeamBuilder from './components/TeamComp/TeamBuilder';
import PageNotFound from './components/PageNotFound';
import Tierlist from './components/Tierlist/Tierlist';
import Home from './components/Homepage/Home';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HashRouter>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route
          path='/'
          element={<Home setShowMenu={setShowMenu} />}
        />
        <Route
          path='/hero-list'
          element={<HeroList setShowMenu={setShowMenu} />}
        />
        <Route
          path='/hero-list/:heroName'
          element={<Hero setShowMenu={setShowMenu} />}
        />
        <Route
          path='/cube'
          element={<CubeOfTruth setShowMenu={setShowMenu} />}
        />
        <Route
          path='/team-builder'
          element={<TeamBuilder setShowMenu={setShowMenu} />}
        />
        <Route
          path='/team-builder/:builderData'
          element={<TeamBuilder setShowMenu={setShowMenu} />}
        />
        <Route
          path='/tierlist'
          element={<Tierlist setShowMenu={setShowMenu} />}
        />
        <Route path='*' element={<PageNotFound setShowMenu={setShowMenu} />} />
      </Routes>
      <Footer setShowMenu={setShowMenu} />
    </HashRouter>
  );
}

export default App;
