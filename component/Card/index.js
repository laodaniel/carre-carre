import { useContext } from 'preact/hooks';
import AppContext from 'context/AppContext';

const Card = () => {
  const [state] = useContext(AppContext);
  const { slot } = state;
  return (
    <section>
      {slot.key && (
        <div>
          <h3>{slot.name}</h3>
          <span>{slot.plantFamilies}</span>
          <p>{slot.description}</p>
          <p>{slot.foes}</p>
          <p>{slot.friends}</p>
        </div>
      )}
    </section>
  );
};

export default Card;
