import './assets/assets.js';
import './index.css';
import { createStore } from 'redux';
import { DragDropContext } from 'react-dnd';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Header from './views/Header';
import HTML5Backend from 'react-dnd-html5-backend';
import plants from './data/plants.json';
import PlantDetails from './views/PlantDetails';
import PlantSelector from './views/PlantSelector';
import plot from './data/my-plot.json';
import PlotContainer from './views/PlotContainer';
import React, { Component } from 'react';
import reducer from './reducers/reducers';
import style from './index.css';

const initialState = { plants, plot };
let store = createStore(reducer, initialState);
const state = store.getState();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlant: undefined
    };
  }

  setSelectedPlant(selectedPlant) {
    this.setState({ selectedPlant });
  }

  render() {
    return(
      <Provider store={store}>
        <div className={style.container}>
          <Header plot={state.plot}/>
          <PlotContainer setSelectedPlant={ (plant) => this.setSelectedPlant(plant) } />
          <PlantSelector/>
          { this.state.selectedPlant && <PlantDetails plant={ this.state.selectedPlant }/> }
        </div>
      </Provider>
    );
  }
}

render(React.createElement(DragDropContext(HTML5Backend)(App)), document.getElementById('main'));
