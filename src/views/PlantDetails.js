import React from 'react';
import style from '../index.css';

const PlantDetails = ({plant}) =>
  <aside className={style.details}>
    <h3 className={style.details_title}>{plant.name}</h3>
    <div className={style.details_family}>{plant.plantFamilies}</div>
    <div>{plant.description}</div>
    <div>{plant.companions && plant.companions.map(companion => <span key={companion}>{companion} </span>)}</div>
  </aside>
;

PlantDetails.propTypes = {
  plant: React.PropTypes.object.isRequired
};

export default PlantDetails;
