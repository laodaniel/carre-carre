import Plant from './plant';
import React from 'react';
import style from '../index.css';

const renderCompanions = companions =>
  <div>
    <span>Bonnes associations:</span>
    <div>{ companions.map(
      companion => <Plant key={companion} plantKey={companion}/>)}
    </div>
  </div>
;

const renderAntagonists = antagonists =>
<div>
  <span>Mauvaises associations:</span>
  <div>{ antagonists.map(
    antagonist => <Plant key={antagonist} plantKey={antagonist}/>)}
  </div>
</div>;

const PlantDetails = ({plant, hide}) =>
  <aside className={style.details}>
    <span className={style.details_hide} onClick={hide}>X</span>
    <h3 className={style.details_title}>{plant.name}</h3>
    <div className={style.details_family}>{plant.plantFamilies}</div>
    <div>{plant.description}</div>
    <div>{plant.companions && renderCompanions(plant.companions)}</div>
    <div>{plant.antagonists && renderAntagonists(plant.antagonists)}</div>
  </aside>
;

PlantDetails.propTypes = {
  plant: React.PropTypes.object.isRequired,
  hide: React.PropTypes.func
};

export default PlantDetails;
