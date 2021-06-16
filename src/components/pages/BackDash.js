import React from 'react';
import { useSelector } from 'react-redux';
import {
  faCoffee,
  faPenAlt,
  faBookOpen,
  faQuestion,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../redux/actions/userActions';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const BackDash = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

  const user = useSelector((state) => state.userReducer.user);
  if (!user) {
    return <h1>not allowed Please login or register</h1>;
  }
  return (
    <div>
      <header id='headerdash'>
        <div class='d-flex flex-column'>
          <div class='profile'>
            <Link to='/profile'>
              <img src={user.avatar} alt='' class='img-fluid rounded-circle' />
              <h1 class='text-light text-uppercase'>
                {user.firstName} {user.lastName}{' '}
              </h1>
            </Link>

            <div class='social-links mt-3 text-center'>
              {/* <h5>{user.email} </h5>
              <h5>{user.adress} </h5>
              <h5>{user.phone} </h5> */}
              <br />
              <br />
              <a href='#'>E</a>
              <a href='#'>T</a>
              <a href='#'>U</a>
              <a href='#'>D</a>
              <a href='#'>I</a>
              <a href='#'>K</a>
            </div>
          </div>
          <br />

          <nav class='nav-menudash'>
            <ul>
              <li>
                <Link to='/dashboard'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='35'
                    fill='currentColor'
                    class='bi bi-grid-1x2-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z' />
                  </svg>
                  <span> Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to='/profile'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='35'
                    fill='currentColor'
                    class='bi bi-person-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                  </svg>
                  <span> Profile</span>
                </Link>
              </li>
              <li>
                <Link to='/students'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='35'
                    fill='currentColor'
                    class='bi bi-collection-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z' />
                  </svg>
                  <span> Students</span>
                </Link>
              </li>

              <li>
                <a href='/' onClick={logoutUser}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='35'
                    fill='currentColor'
                    class='bi bi-arrow-left-square-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z' />
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default BackDash;
