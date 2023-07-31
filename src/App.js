import Accueil from './pages/accueil/Accueil';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Horaire from './pages/horaires/Horaires';
import Inscription from './pages/inscription/Inscription';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/horaires" element={<Horaire />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
