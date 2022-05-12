import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonDetail } from '../../services/pokemon';
import ReactDOM from 'react-dom';
import { ToggleContext } from '../../context/ToggleContext';

export const PokemonDetail = ({ listaDeCapturados, setListaDeCapturados }) => {
  const params = useParams();
  const navigate = useNavigate();
  const context = useContext(ToggleContext);
  console.log(context);

  useEffect(() => {
    if (context.value !== 'Contexto modificado') {
      context.setContext('Contexto modificado');
    }
  }, []);

  const pokemonInfo = useFetchPokemonInfo(params.pokemonName);

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
      {ReactDOM.createPortal(
        <div>Out of root: {params.pokemonName}</div>,
        document.querySelector('#modal')
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

function useFetchPokemonInfo(pokemonName) {
  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
    getPokemonDetail(pokemonName).then(setPokemonInfo);
  }, [pokemonName]);

  return pokemonInfo;
}
