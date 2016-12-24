import React from 'react';
import style from '../index.css';

const Plant = (plant) =>
  <div className={style.plant} onClick={ plant.onClick } style={{...plant.style}}>
    {plant.onRemove &&
      <div className={style.plant_remove}
        onClick={ plant.onRemove }>x</div>
    }
    <svg className={style.plant_image}>
      <use xlinkHref={plant.image ? `#${plant.image}` : '#default-plant'} />
    </svg>
    <span className={style.plant_name}>{plant.name}</span>
  </div>
;

Plant.propTypes = {
  plant: React.PropTypes.object
};

export default Plant;
