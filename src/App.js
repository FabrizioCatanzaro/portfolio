import './App.css';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Jelly } from '@uiball/loaders'
import { useState } from 'react';

function App() {

  let [loader, setLoader] = useState(true)

  setTimeout( () => {
    setLoader(false)
  }, 4000)

  return (
    <div className="App">
      { loader ?
      <div className='loaderCont'>
          <Jelly 
            size={280}
            lineWeight={3.5}
            speed={1} 
            color='var(--resaltado)' 
          />
      </div>
        : <Layout>
            <Routes>
              <Route element={<Home />} path='/'/>
            </Routes>
          </Layout>
      }
    </div>
  );
}

export default App;
