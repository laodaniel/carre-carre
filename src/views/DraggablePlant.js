import { DragSource } from 'react-dnd';
import classnames from 'classnames';
import ItemTypes from './ItemTypes';
import React from 'react';
import style from '../index.css';

const plantSource = {
  beginDrag() {
    return {};
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      if (props.removePlant) {
        props.removePlant();
      }
      props.addPlant(dropResult.index);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Plant = ({ isDragging, connectDragSource, removePlant,
  plant, setSelectedPlant, inlineStyle, isCompanion, isAntagonist, showDetails }) =>
  connectDragSource(
    <div className={classnames(style.plant, isDragging && style.plant_isDragging,
      isCompanion && style.plant_companion, isAntagonist && style.plant_antagonist)}
      onMouseEnter={ setSelectedPlant ? () => setSelectedPlant(plant) : '' }
      onMouseLeave={ setSelectedPlant ? () => setSelectedPlant() : '' }
      style={{...inlineStyle}} >
      {removePlant &&
        <div className={style.plant_remove}
          onClick={ removePlant }>x</div>
      }
      {showDetails &&
        <div className={style.plant_showDetails}
          onClick={ () => showDetails(plant) }>?</div>
      }
      <svg className={style.plant_image}>
        <use xlinkHref={plant.image ? `#${plant.image}` : '#default-plant'} />
      </svg>
      <span className={style.plant_name}>{plant.name}</span>
    </div>
  );

Plant.propTypes = {
  isDragging: React.PropTypes.bool.isRequired,
  connectDragSource: React.PropTypes.func.isRequired,
  addPlant: React.PropTypes.func,
  removePlant: React.PropTypes.func,
  setSelectedPlant: React.PropTypes.func,
  showDetails: React.PropTypes.func,
  plant: React.PropTypes.object,
  inlineStyle: React.PropTypes.object,
  isCompanion: React.PropTypes.bool,
  isAntagonist: React.PropTypes.bool
};

export default DragSource(ItemTypes.PLANT, plantSource, collect)(Plant);
