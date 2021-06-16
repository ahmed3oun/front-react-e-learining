import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  addCourse,
  getAllCoursesOfLevel,
} from '../../redux/actions/courseActions';
import { addLevel } from '../../redux/actions/levelActions';

const AddCourseForm = ({ level }) => {
  const [modal, setModal] = useState(false);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseContent, setCourseConent] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [price, setPrice] = useState('');

  const toggle = () => {
    setModal(!modal);
  };
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const addNewCourse = () => {
    const newCourse = {
      courseTitle,
      courseContent,
      courseDuration,
      level,
      price,
      author: `${user.firstName} ${user.lastName}`,
    };

    dispatch(addCourse(newCourse, level));

    history.push(`/leveldash/${level}`);
    setCourseTitle('');
    setCourseConent('');
    setCourseDuration('');
    setPrice('');
    toggle();
  };

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
        <span className='ml-2'>Add New Course</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Course</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='courseTitle'>course title</Label>
              <Input
                type='text'
                value={courseTitle}
                name='courseTitle'
                id='courseTitle'
                placeholder='courseTitle'
                className='mb-3'
                onChange={(e) => setCourseTitle(e.target.value)}
              />
              <Label for='courseContent'>course content</Label>
              <Input
                type='textarea'
                value={courseContent}
                name='courseContent'
                id='courseContent'
                placeholder='courseContent'
                className='mb-3'
                onChange={(e) => setCourseConent(e.target.value)}
              />
              <Label for='courseDuration'>course duration</Label>

              <Input
                type='number'
                value={courseDuration}
                name='courseDuration'
                id='courseDuration'
                placeholder='courseDuration'
                className='mb-3'
                onChange={(e) => setCourseDuration(e.target.value)}
              />
              <Label for='price'>price</Label>
              <Input
                type='number'
                value={price}
                name='price'
                id='price'
                placeholder='price'
                className='mb-3'
                onChange={(e) => setPrice(e.target.value)}
              />

              <Button
                color='dark'
                style={{ marginTop: '2rem' }}
                block
                onClick={addNewCourse}
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

export default AddCourseForm;
