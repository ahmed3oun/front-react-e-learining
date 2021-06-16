import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Route } from 'react-router-dom';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const Login_Register = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle=''>Login / Register</ModalHeader>
        <ModalBody>
          to access this course you have to login , if you dont have an account
          please register
        </ModalBody>
        <ModalFooter>
          <Button color='success'>
            {' '}
            <LoginModal />
          </Button>
          <Button>
            {' '}
            <RegisterModal />
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login_Register;
