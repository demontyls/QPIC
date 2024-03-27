import React from 'react';
import './style/index.scss'
import { Route, Routes } from 'react-router-dom';
import {Basket, Catalog, Contacts, Favorites, Home, Layout} from '../pages';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={ <Layout/> }>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/basket'} element={ <Basket /> } />
          <Route path={'catalog'} element={ <Catalog /> } />
          <Route path={'contacts'} element={ <Contacts /> } />
          <Route path={'favorites'} element={ <Favorites/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
