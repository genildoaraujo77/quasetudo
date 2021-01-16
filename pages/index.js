import React, { useState } from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Contador />
    </div>
  )
}

const Contador = () => {
  const [contador, setContador] = useState(1);
  
  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home;