import React, { useState } from 'react';

export default function TotaisCod() {
  const [cod, setCod] = useState('');
  const [resultado, setResultado] = useState(null);

  const procurar = () => {
    fetch(`https://apirest-dygyf4b5bcg8bud6.spaincentral-01.azurewebsites.net/api/Arbitros/Totais?Cod=${cod}`)
      .then(res => res.json())
      .then(data => setResultado(data))
      .catch(err => console.error('Erro:', err));
  };

  return (
    <div className="container mt-4">
      <h2>Procurar Estatísticas por Árbitro</h2>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Insere o código do árbitro"
        value={cod}
        onChange={(e) => setCod(e.target.value)}
      />
      <button onClick={procurar} className="btn btn-primary mb-3">Pesquisar</button>

      {resultado && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Código</th>
                <th>Total Árbitro</th>
                <th>Total AA1</th>
                <th>Total AA2</th>
                <th>Total Noite</th>
                <th>Total Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{resultado.cod}</td>
                <td>{resultado.totalArbitro}</td>
                <td>{resultado.totalAA1}</td>
                <td>{resultado.totalAA2}</td>
                <td>{resultado.totalNoite}</td>
                <td>{resultado.totalValor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
