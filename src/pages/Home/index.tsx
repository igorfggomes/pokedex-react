import { PokeballIconSmall } from '../../assets/pokeball';

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
    </div>
  );
};

Home.displayName = 'Home';
