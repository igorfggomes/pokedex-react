import { PokemonCard } from '../PokemonCard';

import styles from './styles.module.scss';

interface PokemonListProps {
  pokemonsUrls?: string[] | null;
  page: number;
  perPage: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: PokemonListProps) => {
  return (
    <div className={styles.pokemons}>
      {pokemonsUrls?.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map((pokemonUrl) => (
        <PokemonCard key={pokemonUrl} url={pokemonUrl} />
      ))}
    </div>
  );
};
