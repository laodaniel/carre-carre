import Plant from './plant';
import React from 'react';
import style from '../index.css';

const renderCompanions = companions =>
  <div>
    <span>Bonnes associations:</span>
    <div className={style.details_list}>{ companions.map(
      companion => <Plant key={companion} plantKey={companion}/>)}
    </div>
  </div>
;

const renderAntagonists = antagonists =>
<div>
  <span>Mauvaises associations:</span>
  <div className={style.details_list}>{ antagonists.map(
    antagonist => <Plant key={antagonist} plantKey={antagonist}/>)}
  </div>
</div>;

const PlantDetails = ({plant, hide}) =>
  <aside className={style.details} onMouseLeave={ hide }>
    <span className={style.details_hide} onClick={hide}>X</span>
    <h3 className={style.details_title}>{plant.name}</h3>
    <div className={style.details_family}>{plant.plantFamilies}</div>
    <div className={style.details_description}>{plant.description}</div>
    <div>{plant.companions && renderCompanions(plant.companions)}</div>
    <div>{plant.antagonists && renderAntagonists(plant.antagonists)}</div>
  </aside>
;

PlantDetails.propTypes = {
  plant: React.PropTypes.object.isRequired,
  hide: React.PropTypes.func
};

export default PlantDetails;
