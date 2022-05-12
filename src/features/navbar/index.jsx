import { useState, useEffect } from 'react';

export const Navbar = ({ listaDeCapturados, children }) => {
  const [numPokemonCapturados, setNumPokemonCapturados] = useState(0);
  useEffect(() => {
    setNumPokemonCapturados(listaDeCapturados.length);
  }, [listaDeCapturados]);

  return (
    <div style={{ border: '1px solid grey' }}>
      Contador de pokemon: {numPokemonCapturados}
      {children}
    </div>
  );
};
