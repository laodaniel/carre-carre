import React from 'react';
import plants from './data/plants.json';
import style from './index.css';

const PlantSelector = () =>
  <ul className={style.plantSelector}> {
    plants.map((plant, index) =>
      <li className={style.plantSelector_plant} key={index}>{plant.name}</li>
    )}
  </ul>
;
export default PlantSelector;
