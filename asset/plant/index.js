import Salad from './salad';
import Default from './default';

const PlantAsset = ({ name }) => {
  const assets = {
    salad: Salad,
  }
  const Svg = assets[name] ? assets[name] : Default;
  return <Svg />;
};

export default PlantAsset;
