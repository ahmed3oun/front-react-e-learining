import React, { useState } from 'react';
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
  Tooltip,
} from 'reactstrap';
import { addLevel } from '../../redux/actions/levelActions';

const AddLevelForm = () => {
  const [modal, setModal] = useState(false);
  const [numLevel, setNumLevel] = useState('');
  const [levelDescription, setLevelDescription] = useState('');
  const [levelName, setLevelName] = useState('');
  const [nbOfCourses, setNbOfCourses] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const addNewLevel = () => {
    const newLevel = {
      numLevel,
      levelDescription,
      levelName,
      nbOfCourses,
    };

    dispatch(addLevel(newLevel));

    history.push('/levels');
    setNumLevel('');
    setLevelName('');
    setLevelDescription('');
    setNbOfCourses('');
    toggle();
  };
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggletip = () => setTooltipOpen(!tooltipOpen);
  return (
    <div style={{ padding: '0 15px' }}>
      <Button color='success' onClick={toggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='white'
          class='bi bi-plus-circle-fill'
          viewBox='0 0 16 16'
        >
          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
        </svg>
        <span className='ml-2'>Add New Level</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add level</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='levelNumber'>level Number</Label>
              <Input
                type='text'
                value={numLevel}
                name='levelNumber'
                id='levelNumber'
                placeholder='levelNumber'
                className='mb-3'
                onChange={(e) => setNumLevel(e.target.value)}
              />
              <Label for='levelName'>Level Name</Label>
              <Input
                type='text'
                value={levelName}
                name='levelName'
                id='levelName'
                placeholder='levelName'
                className='mb-3'
                onChange={(e) => setLevelName(e.target.value)}
              />
              <Label for='levelDescription'>Level Description</Label>

              <Input
                type='text'
                value={levelDescription}
                name='levelDescription'
                id='levelDescription'
                placeholder='levelDescription'
                className='mb-3'
                onChange={(e) => setLevelDescription(e.target.value)}
              />
              <Label for='nbcourses'>Number of courses</Label>

              <Input
                type='text'
                value={nbOfCourses}
                name='nbcourses'
                id='nbcourses'
                placeholder='nbcourses'
                className='mb-3'
                onChange={(e) => setNbOfCourses(e.target.value)}
              />
              <Button
                color='dark'
                style={{ marginTop: '2rem' }}
                block
                onClick={addNewLevel}
              >
                Add
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddLevelForm;
