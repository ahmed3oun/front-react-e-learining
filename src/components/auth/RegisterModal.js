import React, { useState } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  CustomInput,
} from 'reactstrap';
import { registerUser } from '../../redux/actions/userActions';

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  //const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [adress, setAdress] = useState('');
  //const [phone, setPhone] = useState('');
  const [role, setRole] = useState('teacher');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    const newUser = {
      //firstName,
      name,
      email,
      password,
      //adress,
      role,
      //phone,
    };
    dispatch(registerUser(newUser));
    history.push('/dashboard');
    setEmail('');
    //setFirstName('');
    setName('');
    setPassword('');
    //setAdress('');
    //setPhone('');
    setRole('teacher');
  };

  return (
    <div>
      <NavLink
        style={{ color: '#556272', fontWeight: 'bold' }}
        onClick={toggle}
        href='#'
      >
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              {/* <Label for='name'>First Name</Label>
              <Input
                type='text'
                value={firstName}
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={(e) => setFirstName(e.target.value)}
              /> */}
              <Label for='name'>Last Name</Label>
              <Input
                type='text'
                value={name}
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={(e) => setName(e.target.value)}
              />
              <Label for='email'>Email</Label>
              <Input
                type='email'
                value={email}
                name='email'
                id='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for='password'>Password</Label>
              <Input
                type='password'
                value={password}
                name='password'
                id='password'
                placeholder='Password'
                className='mb-3'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for='adress'>Adress</Label>
              {/* <Input
                type='adress'
                value={adress}
                name='adress'
                id='adress'
                placeholder='adress'
                className='mb-3'
                onChange={(e) => setAdress(e.target.value)}
              /> */}
              <Label for='phone'>Phone</Label>
              {/* <Input
                type='number'
                value={phone}
                name='phone'
                id='phone'
                placeholder=' phone'
                className='mb-3'
                onChange={(e) => setPhone(e.target.value)}
              /> */}
              <Label for='role'>Please Select your role</Label>
              <CustomInput
                type='select'
                id='role'
                name='role'
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value='teacher'>Teacher</option>
                <option value='student'>Student</option>
              </CustomInput>
              <Button className='mt-3' color='primary' onClick={handleRegister}>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
