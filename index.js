import "preact/debug";
import { AppContextProvider } from 'context/AppContext';
import { render } from 'preact';
import Card from 'component/Card';
import Header from 'component/Header';
import Plot from 'component/Plot';
import './index.css';

const App = () => (
  <AppContextProvider>
    <Header />
    <Plot />
    <Card />
  </AppContextProvider>
);

render(<App />, document.body);