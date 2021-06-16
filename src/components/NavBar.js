import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import { useHistory } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { logout } from '../redux/actions/userActions';
import { Redirect } from 'react-router-dom';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <Fragment>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {user && user.firstName}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href='/dashboard'>Dashboard</DropdownItem>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={logoutUser}>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Login/Register
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <LoginModal />
          </DropdownItem>
          <DropdownItem>
            <RegisterModal />
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Fragment>
  );

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>ETUDIK</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/aboutus'>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/levels'>levels</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>Contact Us</NavLink>
            </NavItem>
            {isAuth ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
