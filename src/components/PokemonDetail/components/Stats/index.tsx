import { HeightIcon, WeightIcon } from '../../../../assets/stats';
import { IPokemon } from '../../../../interfaces/interfaces';
import styles from './styles.module.scss';

interface StatsProps {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: StatsProps) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
