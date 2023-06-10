import { PokemonCard } from '../PokemonCard';
import styles from './styles.module.scss';

interface PokemonListProps {
  pokemonsUrls?: string[] | null;
  page?: number;
  perPage?: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: PokemonListProps) => {
  return (
    <div className={styles.pokemons}>
      {pokemonsUrls?.map((pokemonUrl) => (
        <PokemonCard key={pokemonUrl} url={pokemonUrl} />
      ))}
    </div>
  );
};

PokemonList.displayName = 'PokemonList';
