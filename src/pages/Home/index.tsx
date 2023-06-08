import { PokeballIconSmall } from '../../assets/pokeball';
import { PokemonList } from '../../components/PokemonList';

import styles from './styles.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <header>
        <div>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList />
    </div>
  );
};

Home.displayName = 'Home';
