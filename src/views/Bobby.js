import classnames from 'classnames';
import { connect } from 'react-redux';
import React from 'react';
import style from '../index.css';

const getPlantByKey = (plants, plantKey) =>
  plants.map(p => p.key).indexOf(plantKey);

const getPlantData = (plants, plantKey) =>
  plants[getPlantByKey(plants, plantKey)];

const getAntagonists = (plot, plants) => {
  return plot.plants.reduce((pAcc, p) => {
    const plant = getPlantData(plants, p.key);
    const antagonists = plot.plants.reduce((aAcc, a) =>
      plant.antagonists && plant.antagonists.indexOf(a.key) > -1 ? [...aAcc, a] : aAcc, []);
    return antagonists.length > 0 ? [...pAcc, { plant, antagonists, slot: p.slot }] : pAcc;
  }, []);
};

const Bobby = ({bobby, plot, plants}) => {
  const antagonists = getAntagonists(plot, plants);
  return (
    <div className={classnames(style.bobby, bobby.isVisible && style.bobby_visible)} >
      {antagonists.map((a, index) =>
        <div key={ index }>
          { a.plant.key } in slot { a.slot } has antagonists :
          <div>{a.antagonists.map((ant, i) =>
            <span key={i}>{ant.key} in slot {ant.slot}</span>)}
          </div>
        </div>
      )}
      {bobby.message}
    </div>
  );
};

Bobby.propTypes = {
  bobby: React.PropTypes.object,
  plants: React.PropTypes.array,
  plot: React.PropTypes.object
};

const mapStateToProps = state => {
  const { bobby, plants, plot } = state;
  return {
    bobby,
    plants,
    plot
  };
};

export default connect(mapStateToProps)(Bobby);
