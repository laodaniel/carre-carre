import { DragSource } from 'react-dnd';
import React from 'react';
import style from '../index.css';

const plantSource = {
  beginDrag() {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Plant = ({ isDragging, connectDragSource, onAdd, onRemove, image, inlineStyle, name}) =>
  connectDragSource(<div className={style.plant} onClick={ onAdd } style={{...inlineStyle}}>
    {onRemove &&
      <div className={style.plant_remove}
        onClick={ onRemove }>x</div>
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

export default DragSource('PLANT', plantSource, collect)(Plant);
