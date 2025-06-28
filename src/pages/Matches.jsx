/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Matches() {
  const [jogos, setJogos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://apirest-dygyf4b5bcg8bud6.spaincentral-01.azurewebsites.net/api/Jogos')
      .then(res => setJogos(res.data))
      .catch(err => console.error('Erro ao buscar jogos:', err));
  }, []);

  // Filtro simples por qualquer campo
  const jogosFiltrados = jogos.filter(j =>
    Object.values(j).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container mt-4">
      <h2>Todos os Jogos</h2>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Pesquisar em qualquer campo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Código</th>
              <th>Equipa Visitada</th>
              <th>Equipa Visitante</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Árbitro</th>
              <th>AA1</th>
              <th>AA2</th>
              <th>Divisão</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {jogosFiltrados.map(jogo => (
              <tr key={jogo.cod_Jogo}>
                <td>{jogo.cod_Jogo}</td>
                <td>{jogo.equipaVisitada}</td>
                <td>{jogo.equipaVisitante}</td>
                <td>{jogo.data}</td>
                <td>{jogo.hora}</td>
                <td>{jogo.nome_Arbitro}</td>
                <td>{jogo.nome_AA1}</td>
                <td>{jogo.nome_AA2}</td>
                <td>{jogo.divisao}</td>
                <td>{jogo.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
*/