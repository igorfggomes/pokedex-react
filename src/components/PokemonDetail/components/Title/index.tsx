import styles from './styles.module.scss';

interface TitleProps {
  content: string;
  backgroundSelected: string;
}

export const Title = ({ content, backgroundSelected }: TitleProps) => {
  return (
    <span className={styles.title} style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
};
