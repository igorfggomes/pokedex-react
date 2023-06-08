import { usePokemon } from '../../hooks/usePokemon';
import styles from './styles.module.scss';

interface PokemonCardProps {
  url: string;
}

export const PokemonCard = ({ url }: PokemonCardProps) => {
  const { pokemon } = usePokemon(url);

  console.log(pokemon);

  return <div></div>;
};

PokemonCard.displayName = 'PokemonCard';
