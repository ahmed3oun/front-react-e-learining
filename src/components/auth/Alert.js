import React from 'react';
import alertReducer from '../../redux/reducers/alertReducer';
import { useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import Notifications, { notify } from 'react-notify-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertComp = () => {
  const alerts = useSelector((state) => state.alertReducer);
  console.log(alerts);
  return (
    <div>
      {/* {alerts !== null &&
        alerts.length > 0 &&
        alerts.forEach((alert) => {
          toast(alert.msg);
        })} */}
      {alerts && alerts.map((alert) => toast(alert.msg))}
    </div>
  );
};

export default AlertComp;
