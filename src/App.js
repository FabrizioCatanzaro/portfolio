import './App.css';
import Layout from './layout/Layout';
import Projects from './pages/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';


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
