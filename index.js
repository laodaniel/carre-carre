import "preact/debug";
import { AppContextProvider } from 'context/AppContext';
import { render } from 'preact';
import Header from 'component/Header';
import Plot from 'component/Plot';
import './index.css';

const App = () => (
  <AppContextProvider>
    <Header />
    <Plot />
  </AppContextProvider>
);

render(<App />, document.body);