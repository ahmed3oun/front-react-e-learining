import React, { useState, useEffect } from 'react';
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
  ModalFooter,
} from 'reactstrap';
import { editCourse, getOneCourse } from '../../redux/actions/courseActions';

const EditCourseModal = ({ course }) => {
  const [modal, setModal] = useState(false);

  const [title, setTitle] = useState(course.courseTitle);
  const [content, setContent] = useState('courses.course.courseContent');

  const [duration, setCourseDuration] = useState(
    'courses.course.courseDuration'
  );

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const edilevel = () => {
    const newCourse = {
      title,
      content,
      duration,
    };

    dispatch(editCourse());

    history.push('/courses');

    toggle();
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <Button onClick={toggle} href='#'>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Course</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='title'>Level title</Label>
              <Input
                type='text'
                value={title}
                name='title'
                id='title'
                placeholder='title'
                className='mb-3'
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label for='content'>Level Name</Label>
              <Input
                type='text'
                value={content}
                name='content'
                id='content'
                placeholder='content'
                className='mb-3'
                onChange={(e) => setContent(e.target.value)}
              />
              <Label for='duration'>Course duration</Label>

              <Input
                type='text'
                value={duration}
                name='duration'
                id='duration'
                placeholder='duration'
                className='mb-3'
                onChange={(e) => setCourseDuration(e.target.value)}
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

export default EditCourseModal;
