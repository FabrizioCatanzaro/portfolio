import './App.css';
import Layout from './layout/Layout';
import Projects from './pages/Projects/Projects';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Projects />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
