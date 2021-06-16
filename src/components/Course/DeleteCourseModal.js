import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteCourseModal = ({ delCourse }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const history = useHistory();
  const confdel = () => {
    delCourse();
    history.goBack();
    toggle();
  };

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        <svg
          id='TooltipExamplee'
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='white'
          class='bi bi-x-circle-fill'
          viewBox='0 0 16 16'
          onClick={toggle}
        >
          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z' />
        </svg>
        <span className='ml-2'>Delete Course</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className=''>
        <ModalHeader toggle={toggle}>Delete Course</ModalHeader>
        <ModalBody>
          Do you really want to delete this Course and its quiz
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={confdel}>
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

export default DeleteCourseModal;
