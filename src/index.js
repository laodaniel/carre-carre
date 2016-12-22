import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import reducer from './reducers/reducers';
import PlotContainer from './views/PlotContainer';
import PlantSelector from './views/PlantSelector';
import plot from './data/my-plot.json';
import plants from './data/plants.json';

const initialState = { plants, plot };
let store = createStore(reducer, initialState);

const App = () =>
  <Provider store={store}>
    <section className="container">
      <PlotContainer />
      <PlantSelector plants={store.getState().plants}/>
    </section>
  </Provider>;

render(<App />, document.getElementById('main'));
