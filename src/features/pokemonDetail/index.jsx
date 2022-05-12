import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonDetail } from '../../services/pokemon';

export const PokemonDetail = ({ listaDeCapturados, setListaDeCapturados }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
    getPokemonDetail(params.pokemonName).then(setPokemonInfo);
  }, [params.pokemonName]);

  return pokemonInfo ? (
    <div>
      <button onClick={() => navigate('/')}>Atrás</button>
      <button
        disabled={listaDeCapturados.includes(params.pokemonName)}
        onClick={() => setListaDeCapturados([...listaDeCapturados, params.pokemonName])}>
        Capturado
      </button>
      <div>{params.pokemonName}</div>
      <div>
        <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name}></img>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
