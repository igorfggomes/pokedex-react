import { IPokemon } from '../../../../interfaces/interfaces';
import { background } from '../../../../utils/BackgroundsByType';
import styles from './styles.module.scss';

interface PokeTypesProps {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: PokeTypesProps) => {
  return (
    <div className={styles.types}>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
