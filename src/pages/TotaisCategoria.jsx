import React, { useState } from 'react';

export default function TotaisCategoria() {
  const [categoria, setCategoria] = useState('');
  const [resultados, setResultados] = useState([]);

  const procurar = () => {
    fetch(`https://apirest-dygyf4b5bcg8bud6.spaincentral-01.azurewebsites.net/api/Arbitros/Totais?Cat=${categoria}`)
      .then(res => res.json())
      .then(data => setResultados(data))
      .catch(err => console.error('Erro:', err));
  };

  return (
    <div className="container mt-4">
      <h2>Procurar Estatísticas por Categoria</h2>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Insere a categoria (ex: C6F, C7F...)"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <button onClick={procurar} className="btn btn-primary mb-3">Pesquisar</button>

      {resultados.length > 0 && (
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
              {resultados.map((r, i) => (
                <tr key={i}>
                  <td>{r.cod}</td>
                  <td>{r.totalArbitro}</td>
                  <td>{r.totalAA1}</td>
                  <td>{r.totalAA2}</td>
                  <td>{r.totalNoite}</td>
                  <td>{r.totalValor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
