import { DragSource } from 'react-dnd';
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

const Plant = ({ isDragging, connectDragSource, addPlant, removePlant,
  plant, handleMouseEnter, inlineStyle, isCompanion, isAntagonist }) =>
  connectDragSource(
    <div className={style.plant} style={{...inlineStyle}} onClick={ addPlant }
      onMouseEnter={ handleMouseEnter ? () => handleMouseEnter(plant) : '' }>
      {removePlant &&
        <div className={style.plant_remove}
          onClick={ removePlant }>x</div>
      }
      <svg className={style.plant_image}>
        <use xlinkHref={plant.image ? `#${plant.image}` : '#default-plant'} />
      </svg>
      <span style={{ opacity: isDragging ? 0.5 : 1, color: isCompanion ? 'green' : isAntagonist ? 'red' : 'white' }}
        className={style.plant_name}>
        {plant.name}
      </span>
    </div>
  );

Plant.propTypes = {
  isDragging: React.PropTypes.bool.isRequired,
  connectDragSource: React.PropTypes.func.isRequired,
  addPlant: React.PropTypes.func,
  removePlant: React.PropTypes.func,
  handleMouseEnter: React.PropTypes.func,
  plant: React.PropTypes.object,
  inlineStyle: React.PropTypes.object,
  isCompanion: React.PropTypes.bool,
  isAntagonist: React.PropTypes.bool
};

export default DragSource(ItemTypes.PLANT, plantSource, collect)(Plant);
