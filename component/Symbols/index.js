import icons from 'asset/icon';

const Symbols = () => (
  <svg width="0" height="0" style="position:absolute">
    {icons.map(({ id, Svg }) => (
      <symbol id={id} xmlns="http://www.w3.org/2000/svg">
        <Svg />
      </symbol>
    ))}
  </svg>
);

export default Symbols;
