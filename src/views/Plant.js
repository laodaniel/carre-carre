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

const Plant = ({ isDragging, connectDragSource, addPlant, removePlant, image, inlineStyle, name}) =>
  connectDragSource(<div className={style.plant} onClick={ addPlant } style={{...inlineStyle}}>
    {removePlant &&
      <div className={style.plant_remove}
        onClick={ removePlant }>x</div>
    }
    <svg className={style.plant_image}>
      <use xlinkHref={image ? `#${image}` : '#default-plant'} />
    </svg>
    <span style={{ opacity: isDragging ? 0.5 : 1 }} className={style.plant_name}>{name}</span>
  </div>)
;

Plant.propTypes = {
  isDragging: React.PropTypes.bool.isRequired,
  connectDragSource: React.PropTypes.func.isRequired
};

export default DragSource(ItemTypes.PLANT, plantSource, collect)(Plant);
