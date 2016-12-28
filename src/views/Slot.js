import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import React, { Component } from 'react';
import style from '../index.css';

const slotDropTarget = {
  canDrop() {
    return true;
  },

  drop(props) {
    return { index: props.index };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class Slot extends Component {
  render() {
    return this.props.connectDropTarget(
      <div className={style.slot}>
        { this.props.children }
      </div>
    );
  }
}

Slot.propTypes = {
  children: React.PropTypes.object,
  connectDropTarget: React.PropTypes.func
};

export default DropTarget(ItemTypes.PLANT, slotDropTarget, collect)(Slot);
