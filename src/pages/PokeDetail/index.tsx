import { useParams } from 'react-router-dom';
import { usePokemon } from '../../hooks/usePokemon';
import { PokemonDetail } from '../../components/PokemonDetail';

export const PokeDetail = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon('', pokeId);

  return <PokemonDetail pokemon={pokemon!} />;
};

PokeDetail.displayName = 'PokeDetail';
