import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonDetail } from '../features/pokemonDetail';
import { PokemonList } from '../features/pokemonList';

export const Router = props => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PokemonList {...props} />} />
      <Route path="/:pokemonName" element={<PokemonDetail {...props} />} />
    </Routes>
  </BrowserRouter>
);
