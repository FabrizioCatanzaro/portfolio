import './App.css';
import Layout from './layout/Layout';
import Projects from './pages/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <Layout>
          <AboutMe />
          <Projects />
      </Layout>
    </div>
  );
}

export default App;
