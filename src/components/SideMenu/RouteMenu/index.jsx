import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { SubMenu } from './style';
import { CloseMenuButton } from './closeMenuButton';

export const RouteMenu = ({ openSideMenu, onCloseSideMenu }) => (
  <SubMenu openSideMenu={openSideMenu}>
    <CloseMenuButton onCloseSideMenu={onCloseSideMenu} />
    <Link to="/">
      <span>home</span>
    </Link>
    <Link to="/rank">
      <span>rank</span>
    </Link>
  </SubMenu>
);

RouteMenu.propTypes = {
  openSideMenu: PropTypes.bool.isRequired,
  onCloseSideMenu: PropTypes.func.isRequired,
};
