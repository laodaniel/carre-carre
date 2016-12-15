import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Plot from './Plot';
import PlantSelector from './PlantSelector';
// import app from './Box';

const App = () =>
  <section className="container">
    <Plot />
    <PlantSelector />
  </section>;

render(<App />, document.getElementById('main'));

// app();
