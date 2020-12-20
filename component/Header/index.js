import {useContext } from 'preact/hooks';
import AppContext from 'context/AppContext';
import EditableLabel from 'component/EditableLabel';
import GithubCorner from './GithubCorner';
import './styles.module.css';

const Header = () => {
  const [state] = useContext(AppContext);
  const { name, description } = state;
  return (
    <header>
      <EditableLabel label={name} />
      <EditableLabel label={description} />
      <GithubCorner />
    </header>
  )
};

export default Header;