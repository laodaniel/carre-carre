import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './assets/assets.js';
import Header from './views/Header';
import plants from './data/plants.json';
import PlantSelector from './views/PlantSelector';
import plot from './data/my-plot.json';
import PlotContainer from './views/PlotContainer';
import React from 'react';
import reducer from './reducers/reducers';
import style from './index.css';

const initialState = { plants, plot };
let store = createStore(reducer, initialState);
const state = store.getState();
const App = () =>
  <Provider store={store}>
    <section className={style.container}>
      <Header plot={state.plot}/>
      <PlotContainer/>
      <PlantSelector/>
    </section>
  </Provider>;

render(<App />, document.getElementById('main'));
