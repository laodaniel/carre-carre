import { useContext } from 'preact/hooks';
import AppContext from 'context/AppContext';
import useI18n from 'i18n/useI18n';

const Card = () => {
  const [state] = useContext(AppContext);
  const { t } = useI18n();
  const { slot } = state;
  return (
    <section>
      {slot.key && (
        <div>
          <h3>{t(`plants.${slot.key}.name`)}</h3>
          <span>{slot.plantFamilies}</span>
          <p>{slot.foes}</p>
          <p>{slot.friends}</p>
        </div>
      )}
    </section>
  );
};

export default Card;
