import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import LoginModal from '../auth/LoginModal';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);

  if (!isAuth) {
    return <Redirect to='/login_register' />;
  } // path="/" render="" exact
  return <Route component={Component} {...rest} />;
};

export default PrivateRoute;
