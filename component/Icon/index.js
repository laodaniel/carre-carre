const Icon = ({ name, className }) => (
  <svg className={className}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default Icon;
