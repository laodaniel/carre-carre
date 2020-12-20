import {useContext } from 'preact/hooks';
import AppContext from 'context/AppContext';
import Plant from 'component/Plant';
import styles from './styles.module.css';

const Plot = () => {
  const { plants } = useContext(AppContext);
  const plotStyle = { gridTemplateColumns: `repeat(${Math.pow(plants.length, 0.5)}, auto)` };
  return (
    <main className={styles.plot} style={plotStyle}>
      {plants.map(({ key, name }, index) => (
        <div key={`${key}-${index}`} className={styles.slot}>
          {name && <Plant id={key} name={name} />}
        </div>
      ))}
    </main>
  )
};

export default Plot;
