import { createContext } from 'preact';
import { useReducer } from 'preact/hooks';
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
      key: 'garlic',
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
    },
  ],
  slot: {},
};

const plotFromLocalStorage = localStorage.getItem('plot');
const plot = plotFromLocalStorage ? JSON.parse(plotFromLocalStorage) : defaultPlot;
const slotCount = Math.pow(Math.ceil(Math.pow(plot.plants.length, 0.5)), 2);
const initialState = {
  ...plot,
  plants: [...Array(slotCount).keys()].map((index) => {
    const plant = plot.plants.find((p) => p.index === index);
    return {
      index,
      ...(plant ? plants && plants.find((p) => p.key === plant.key) : {})
    };
  })
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_SLOT':
      return {
        ...state,
        slot: {
          index: action.index,
          ...(action.key ? plants && plants.find((p) => p.key === action.key) : {})
        }
      };
    default:
      return state;
  }
}

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  <AppContext.Provider value={[state, dispatch]}>
    {children}
  </AppContext.Provider>
)};

export default AppContext;
