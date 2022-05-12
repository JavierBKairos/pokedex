import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPokemonList as getPokemonListApi } from '../../services/pokemon';
import { styles } from './styles';

export const PokemonList = ({ listaDeCapturados, setListaDeCapturados }) => {
  const navigate = useNavigate();
  const [pokemonListData, setPokemonListData] = useState();

  const getPokemonListData = useCallback(() => {
    const getPokemonList = async () => {
      try {
        const response = await getPokemonListApi();
        setPokemonListData(response.results);
      } catch (e) {
        console.error('Error en la petición del listado de pokemon', e);
      }
    };

    getPokemonList();
  }, []);

  useEffect(getPokemonListData, [getPokemonListData]);

  return (
    <div style={styles.table}>
      {pokemonListData?.map(pokemon => (
        <div key={pokemon.name} style={styles.listItem}>
          {pokemon.name.toUpperCase()}
          <div>
            <button onClick={() => navigate(`/${pokemon.name}`)}>Ver detalle</button>
            <button
              disabled={listaDeCapturados.includes(pokemon.name)}
              onClick={() => setListaDeCapturados([...listaDeCapturados, pokemon.name])}>
              Capturado
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
