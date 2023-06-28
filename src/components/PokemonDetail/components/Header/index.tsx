import { useNavigate } from 'react-router-dom';
import { PokeballIconBig } from '../../../../assets/pokeball';
import { ArrowLeftIcon } from '../../../../assets/arrows';
import { IPokemon } from '../../../../interfaces/interfaces';
import styles from './styles.module.scss';

interface HeaderProps {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onClick={() => navigate(-1)} />

        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};
