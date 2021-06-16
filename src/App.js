import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLevels } from './redux/actions/levelActions';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NavBarr from './components/nav/NavBarr';

import NavBar from './components/NavBar';
import AllLevels from './components/Level/AllLevels';
import LevelComp from './components/Level/LevelComp';
import Home from './components/pages/Home';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import { getAllUsers, getAuthUser } from './redux/actions/userActions';
import CourseComp from './components/Course/CourseComp';
import { getAllCourses } from './redux/actions/courseActions';
import Profile from './components/pages/Profile';
import LevelsHome from './components/Level/LevelsHome';
import Login_Register from './components/pages/Login_Register';
import LevelCompDash from './components/Level/LevelCompDash';
import Alert from './components/auth/Alert';
import AlertComp from './components/auth/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  const getLevels = () => dispatch(getAllLevels());
  const getUsers = () => dispatch(getAllUsers());

  useEffect(() => {
    getUser();
    getLevels();
    getAllCourses();
    getUsers();
  }, []);

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);

  return (
    <div>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        {isAuth ? null : <NavBarr />}
        {/* <NavBar /> */}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/students' component={AllLevels} />
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/profile' component={Profile}></Route>
          <Route
            exact
            path='/login_register'
            component={Login_Register}
          ></Route>
          <Route
            exact
            path='/level/:id'
            render={(props) => <LevelComp {...props} />}
          />
          <Route
            exact
            path='/leveldash/:id'
            render={(props) => <LevelCompDash {...props} />}
          />
          <PrivateRoute
            exact
            path='/course/:id'
            render={(props) => <CourseComp {...props} />}
          ></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
