import React from 'react';
import plot from './data/my-plot.json';
import plants from './data/plants.json';

const Plant = (plant, index) => {
  const currentPlant = plants.reduce((acc, item) => item.id === plant.plantId ? item : acc, null);
  return (
    <div className="plant" key={index}>
      {currentPlant.name}
      {currentPlant.image &&
        <svg>
          <use xlinkHref={currentPlant.image} />
        </svg>
      }
    </div>
  );
};

const Plot = () =>
  <aside className="plot">
    {plot.box.map(Plant)}
  </aside>
;

export default Plot;
