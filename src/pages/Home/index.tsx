import { useContext } from 'react';
import { PokeballIconSmall } from '../../assets/pokeball';
import { PokemonList } from '../../components/PokemonList';
import { PokemonContext } from '../../context/PokemonContext';

import styles from './styles.module.scss';

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);

  return (
    <div className={styles.home}>
      <header>
        <div>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList pokemonsUrls={pokemonsFiltered} />
    </div>
  );
};

Home.displayName = 'Home';
