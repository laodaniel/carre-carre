import React from 'react';
import classnames from 'classnames';
import { format, isSameMonth, isThisMonth, setMonth, getYear } from 'date-fns';
import style from '../index.css';

const Month = ({date = new Date(), onMonthClick, isSelected } = {}) =>
  <div className={ classnames(style.month, isThisMonth(date) && style.month_current,
    isSelected && style.month_selected ) }
    onClick={ () => onMonthClick(date) }>
    {format(date, 'MMM')}
  </div>
;

const Timeline = ({date = new Date(), onMonthClick, selectedDate}) =>
  <div>
    <h4>{ getYear(date) }</h4>
    <div className={ style.months }>
      {[...Array(12)].map((x, index) => {
        const monthDate = setMonth(date, index);
        return <Month date={ monthDate } onMonthClick={ onMonthClick }
          isSelected={ isSameMonth(monthDate, selectedDate) }/>;
      })}
    </div>
  </div>;

Timeline.propTypes = {
  date: React.PropTypes.object,
  onMonthClick: React.PropTypes.func,
  selectedDate:  React.PropTypes.object
};

export default Timeline;
