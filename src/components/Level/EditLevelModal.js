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
  ModalFooter,
  Tooltip,
} from 'reactstrap';
import { addLevel, eidtLevel } from '../../redux/actions/levelActions';

const EditLevelModal = ({ level }) => {
  const [modal, setModal] = useState(false);
  const [numLevel, setNumLevel] = useState(level.numLevel);
  const [levelDescription, setLevelDescription] = useState(
    level.levelDescription
  );
  const [levelName, setLevelName] = useState(level.levelName);
  const [nbOfCourses, setNbOfCourses] = useState(level.nbOfCourses);

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const edilevel = () => {
    const newLevel = {
      numLevel,
      levelDescription,
      levelName,
      nbOfCourses,
    };

    dispatch(eidtLevel(level._id, newLevel));

    history.push('/levels');
    // setNumLevel('');
    // setLevelName('');
    // setLevelDescription('');
    // setNbOfCourses('');
    toggle();
  };
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggletool = () => setTooltipOpen(!tooltipOpen);
  return (
    <div style={{ padding: '0 15px' }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        height='35'
        fill='blue '
        class='bi bi-pencil-square'
        viewBox='0 0 16 16'
        onClick={toggle}
      >
        <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
        <path
          fill-rule='evenodd'
          d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
        />
      </svg>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit level</ModalHeader>
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
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={edilevel}>
            confirm
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditLevelModal;
