import { useState } from 'react';
import Matches from './pages/Matches';
import TotaisCod from './pages/TotaisCod';
import TotaisNucleo from './pages/TotaisNucleo';
import TotaisCategoria from './pages/TotaisCategoria';

export default function App() {
  const [secao, setSecao] = useState('matches');

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Nomeações AFB - Dashboard</h1>

      <div className="btn-group mb-4">
        <button className="btn btn-outline-primary" onClick={() => setSecao('matches')}>Mostrar Jogos</button>
        <button className="btn btn-outline-primary" onClick={() => setSecao('arbitro')}>Por Árbitro</button>
        <button className="btn btn-outline-primary" onClick={() => setSecao('nucleo')}>Por Núcleo</button>
        <button className="btn btn-outline-primary" onClick={() => setSecao('categoria')}>Por Categoria</button>
      </div>

      {secao === 'matches' && <Matches />}
      {secao === 'arbitro' && <TotaisCod />}
      {secao === 'nucleo' && <TotaisNucleo />}
      {secao === 'categoria' && <TotaisCategoria />}
    </div>
  );
}
