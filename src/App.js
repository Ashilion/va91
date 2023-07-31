import Accueil from './pages/accueil/Accueil';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Horaire from './pages/horaires/Horaires';
import Inscription from './pages/inscription/Inscription';
import Foulees from './pages/foulees/Foulees';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/horaires" element={<Horaire />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path = "foulees" element={<Foulees />} />
      </Routes>
    </div>
  );
}

export default App;
