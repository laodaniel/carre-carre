import styles from './styles.module.css';
import PlantAsset from 'asset/plant';
import useI18n from 'i18n/useI18n';

const Plant = ({ id }) => {
  const { t } = useI18n();
  return (
    <div className={styles.plant}>
      <PlantAsset name={id} />
      <div className={styles.name}>
        {t(`plants.${id}.name`)}
      </div>
    </div>
  );
}

export default Plant;
