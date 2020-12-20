import styles from './styles.module.css';
import PlantAsset from 'asset/plant';

const Plant = ({ id, name }) => (
  <div className={styles.plant}>
    <PlantAsset name={id} />
    <div className={styles.name}>{name}</div>
  </div>
);

export default Plant;
