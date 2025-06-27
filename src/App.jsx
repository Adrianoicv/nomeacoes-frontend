import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nomeações AFB - Visualização de Dados</h2>

      <div className="list-group">
        <Link to="/matches" className="list-group-item list-group-item-action">
          Mostrar todos os jogos
        </Link>
        <Link to="/totais/arbitro" className="list-group-item list-group-item-action">
          Procurar por árbitro
        </Link>
        <Link to="/totais/nucleo" className="list-group-item list-group-item-action">
          Procurar por núcleo
        </Link>
        <Link to="/totais/categoria" className="list-group-item list-group-item-action">
          Procurar por categoria
        </Link>
      </div>
    </div>
  );
}
