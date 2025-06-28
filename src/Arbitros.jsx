/*import { useEffect, useState } from 'react';

export default function Arbitros() {
  const [arbitros, setArbitros] = useState([]);

  useEffect(() => {
    fetch('https://apirest-dygyf4b5bcg8bud6.spaincentral-01.azurewebsites.net/api/Arbitros') // API do Azure
      .then(res => res.json())
      .then(data => setArbitros(data))
      .catch(err => console.error('Erro ao buscar árbitros:', err));
  }, []);

  return (
    <div>
      <h2>Lista de Árbitros</h2>
      <ul>
        {arbitros.map((arb) => (
          <li key={arb.cod}>{arb.nome}</li>
        ))}
      </ul>
    </div>
  );
}*/