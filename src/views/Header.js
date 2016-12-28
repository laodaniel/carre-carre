import { connect } from 'react-redux';
import { setName, setDescription } from '../actions/actions';
import EditableLabel from './EditableLabel';
import pkg from '../../package.json';
import React from 'react';
import style from '../index.css';

const Header = ({ plot, dispatch } = {}) =>
  <header className={style.header}>
    <EditableLabel className={style.title} label={plot.name}
      onChange={ (name) => { dispatch(setName(name)); } }/>
    <EditableLabel className={style.description} label={plot.description}
      onChange={ (description) => { dispatch(setDescription(description)); } }/>
    <span>{ pkg.repository }</span>
  </header>
;

export default connect()(Header);
