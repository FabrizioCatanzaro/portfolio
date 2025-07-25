import './App.css';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Jelly } from '@uiball/loaders'
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<Home />} path='/'/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
