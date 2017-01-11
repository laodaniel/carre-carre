import React from 'react';
import classnames from 'classnames';
import { format, isSameMonth, isThisMonth, setMonth,
  setDayOfYear, getDaysInYear } from 'date-fns';
import style from '../index.css';

const Month = ({date = new Date(), setSelectedDate, isSelected } = {}) =>
  <div className={ classnames(style.month, isThisMonth(date) && style.month_current,
    isSelected && style.month_selected ) }
    onClick={ () => setSelectedDate(date) }>
    {format(date, 'MMM')}
  </div>
;

const Timeline = ({date = new Date(), setSelectedDate, selectedDate}) =>
  <div>
    <h4>{ format(selectedDate, 'dddd D MMMM YYYY') }</h4>
    <div className={ style.months }>
      {[...Array(12)].map((x, index) => {
        const monthDate = setMonth(date, index);
        return <Month key={ index } date={ monthDate } setSelectedDate={ setSelectedDate }
          isSelected={ isSameMonth(monthDate, selectedDate) }/>;
      })}
    </div>
    <input className={style.dateSlider} type="range" value={ format(selectedDate, 'DDD') }
      onChange={ (event) => setSelectedDate(setDayOfYear(date, event.target.value)) }
      min="0" max={ getDaysInYear(date) } step="1"/>
</div>;

Timeline.propTypes = {
  date: React.PropTypes.object,
  setSelectedDate: React.PropTypes.func,
  selectedDate:  React.PropTypes.object
};

export default Timeline;
