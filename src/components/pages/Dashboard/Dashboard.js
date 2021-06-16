import React from 'react';
import { useSelector } from 'react-redux';
import NavDash from './NavDash';

const Dashboard = () => {
  const user = useSelector((state) => state.userReducer.user);
  if (!user) {
    return <h1>not allowed Please login or register</h1>;
  }

  return (
    <div className='media border p-3'>
      {/* <img src={user.avatar} className='mr-3 mt-3 rounded-circle'></img>
      <div className='media-body'>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <h5>{user.email} </h5>
        <h5>{user.adress} </h5>
        <h5>{user.phone} </h5>
      </div> */}
     {/* // <NavDash/> */}
    </div>
  );
};

export default Dashboard;
