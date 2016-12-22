import React from 'react';
import style from '../index.css';

const Plant = (plant) =>
  <div className={style.plant} onClick={ plant.onClick }>
    {plant.name}
    {plant.image &&
      <svg>
        <use xlinkHref={plant.image} />
      </svg>
    }
  </div>
;

Plant.propTypes = {
  plant: React.PropTypes.object
};

export default Plant;
