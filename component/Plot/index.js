import { useContext } from 'preact/hooks';
import AppContext from 'context/AppContext';
import Plant from 'component/Plant';
import styles from './styles.module.css';

const Plot = () => {
  const [state, dispatch] = useContext(AppContext);
  const { plants } = state;
  const plotStyle = { gridTemplateColumns: `repeat(${Math.pow(plants.length, 0.5)}, auto)` };

  const onClickHandler = (event) => {
    dispatch({
      type: 'SELECT_SLOT',
      key: event.currentTarget.getAttribute('data-key'),
      index: event.currentTarget.getAttribute('data-index'),
    });
  };

  return (
    <main className={styles.plot} style={plotStyle}>
      {plants.map(({ key }, index) => (
        <div
          data-key={key}
          data-index={index}
          key={`${key}-${index}`}
          className={styles.slot}
          onClick={onClickHandler}
        >
          {key && <Plant id={key} />}
        </div>
      ))}
    </main>
  )
};

export default Plot;
