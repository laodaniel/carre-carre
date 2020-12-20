import {useContext } from 'preact/hooks';
import AppContext from 'context/AppContext';
import EditableLabel from 'component/EditableLabel';
import './styles.module.css';

const Header = () => {
  const { name, description } = useContext(AppContext);
  return (
    <header>
      <EditableLabel label={name} />
      <EditableLabel label={description} />
    </header>
  )
};

export default Header;
