import '../nav/navBarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
//import { Navbar,Button,Form,Nav,FormControl, NavDropdown} from 'react-bootstrap';
import logo from '../nav/logo5.png';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import { useHistory } from 'react-router-dom';
//import Dashboard from './pages/Dashboard';
import { logout } from '../../redux/actions/userActions';
import { Redirect } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

function NavBarr(props) {
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

  const guestLinks = (
    <div id='topbar' className='d-none d-lg-flex align-items-center fixed-top '>
      <div className='container d-flex align-items-center'>
        <div className='contact-info mr-auto'>
          <ul>
            <li>
              <i className='icofont-envelope'></i>
              <a href='mailto:contact@etudik.com'>contact@etudik.com</a>
            </li>
            <li>
              <i className='fas fa-ambulance'></i> 71 985 784
            </li>
            <li>
              <i className='icofont-clock-time icofont-flip-horizontal'></i>
              Mon - Fri | 9am - 5pm
            </li>
          </ul>
        </div>
        <div className='cta'>
          <Button>
            <LoginModal />
          </Button>
          <Button>
            <RegisterModal />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <header id='header' className='fixed-top ' isOpen={isOpen}>
      <div id='home' className='container d-flex .mt-5 align-items-center'>
        <h1 className='logo mr-auto'>
          <a href='/' className='scrollto'>
            <img src='/etudiklogo.png' alt='' />
          </a>
        </h1>

        <nav className='nav-menu d-none d-lg-block'>
          <ul>
            <li className='active'>
              <a href='#top'>Home</a>
            </li>
            <li>
              <a href='#about'>About Us</a>
            </li>
            <li>
              <a href='#levelhome'>Levels</a>
            </li>
            <li>
              <a href='#team'>Teachers</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {guestLinks}
    </header>
  );
}

export default NavBarr;
