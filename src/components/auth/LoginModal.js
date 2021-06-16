import React, { useState , useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  Alert,
} from 'reactstrap';
import {  loginUser } from '../../redux/actions/userActions';

const LoginModal = () => {


  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggle = () => {
    setModal(!modal);
  };
  
  
  //console.log( isAuthenticated )
  const dispatch = useDispatch();
  const history = useHistory();
 /*  useEffect(() => {

     if (isAuthenticated) {
        history.push('/dashboard')
    } 

    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }

}, [dispatch,   isAuthenticated,  error, history])  */
  const handleLogin = (e) => {
    //e.preventDefault();
    dispatch(loginUser({ email, password }));
    

     history.push('/dashboard');
    setEmail('');
    setPassword(''); 
  };

  return (
    <div>
      <NavLink
        style={{ color: '#556272', fontWeight: 'bold' }}
        onClick={toggle}
        href='#'
      >
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                required
                type='email'
                value={email}
                name='email'
                id='email'
                placeholder='email'
                className='mb-3'
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
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button color='primary' onClick={handleLogin}>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
