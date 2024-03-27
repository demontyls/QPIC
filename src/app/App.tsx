import React from 'react';
import './style/index.scss'
import { Route, Routes } from 'react-router-dom';
import {Basket, Catalog, Contacts, Favorites, Home, Layout} from '../pages';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={ <Layout/> }>
          <Route path={'/QPIC'} element={ <Home /> } />
          <Route path={'QPIC/basket'} element={ <Basket /> } />
          <Route path={'QPIC/catalog'} element={ <Catalog /> } />
          <Route path={'QPIC/contacts'} element={ <Contacts /> } />
          <Route path={'QPIC/favorites'} element={ <Favorites/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
