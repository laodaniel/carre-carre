import { createContext } from 'preact';
import plants from './plants.json';

const defaultPlot = {
  name: `My plot ${new Date().getFullYear()}`,
  description: 'Organize and optimize your garden',
  date: new Date(),
  plants: [
    {
      key: 'salad',
      index: 1,
    }, {
      key: 'eggplant',
      index: 3,
    }, {
      key: 'carrot',
      index: 6,
    }, {
      key: 'beet',
      index: 2,
    }, {
      key: 'cucumber',
      index: 7,
    }
  ]
};

const plotFromLocalStorage = localStorage.getItem('plot');
const plot = plotFromLocalStorage ? JSON.parse(plotFromLocalStorage) : defaultPlot;
const slotCount = Math.pow(Math.ceil(Math.pow(plot.plants.length, 0.5)), 2);
const context = {
  ...plot,
  plants: [...Array(slotCount).keys()].map((index) => {
    const plant = plot.plants.find((p) => p.index === index);
    return {
      index,
      ...(plant ? plants && plants.find((p) => p.key === plant.key) : {})
    }
  })
};

const AppContext = createContext(context);

export const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={context}>
    {children}
  </AppContext.Provider>
);

export default AppContext;
