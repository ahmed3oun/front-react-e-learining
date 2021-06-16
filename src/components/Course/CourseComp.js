import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, getOneCourse } from '../../redux/actions/courseActions';
import { getAuthUser } from '../../redux/actions/userActions';
import { Button, Media } from 'reactstrap';
import EditLevelModal from '../Level/EditLevelModal';
import DelLevelModal from '../Level/DelLevelModal';
import EditCourseModal from './EditCourseModal';
import DeleteCourseModal from './DeleteCourseModal';
import { useHistory } from 'react-router-dom';
import BackDash from '../pages/BackDash';
import './courseStyle.css';
const CourseComp = ({ match }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneCourse(match.params.id));
  }, []);
  console.log(isAuth);
  const course = useSelector((state) => state.courseReducer.course);
  const history = useHistory();
  console.log(course);
  const delCourse = () => {
    dispatch(deleteCourse(match.params.id));
  };
  return (
    <div>
      <BackDash />
      <main id='main'>
        <section class='breadcrumbs'>
          <div class='container'>
            <div class='d-flex justify-content-between align-items-center'>
              <div className='section-title'>
                <img src='/etudiklogo.png' alt='' width='200px' />
              </div>
              <div style={{ display: 'flex' }}>
                <Button
                  className='mr-2'
                  color='success'
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    fill='white'
                    class='bi bi-arrow-left-circle-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />
                  </svg>
                  <span className='ml-2'>Back To Courses</span>
                </Button>
                {user && user.role == 'teacher' ? (
                  <DeleteCourseModal delCourse={delCourse} />
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section style={{ width: '1000px', margin: 'auto' }}>
          <div class='container' style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
              <img
                src='https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/fichier.png'
                className='mr-3  rounded-circle'
                width='100px'
              ></img>
              <div>
                <h1 className='mt-3 text-uppercase'>
                  {' '}
                  {course && course.courseTitle}
                </h1>
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                  <h4 className='tag' style={{ backgroundColor: ' #36b37e' }}>
                    Web
                  </h4>
                  <h4 className='tag' style={{ backgroundColor: ' #FFAB00' }}>
                    History
                  </h4>
                  <h4 className='tag' style={{ backgroundColor: ' #FF5630' }}>
                    Course
                  </h4>
                </div>
              </div>
            </div>
            <h4 className='mt-4 text-muted blockquote text-justify'>
              {' '}
              {course && course.courseContent}
            </h4>
          </div>
        </section>
      </main>
    </div>

    // <div style={{ textAlign: 'center' }}>
    //   <Button
    //     color='success'
    //     onClick={() => {
    //       history.goBack();
    //     }}
    //   >
    //     back to courses
    //   </Button>
    //   <br></br>
    //   <img
    //     src='https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/fichier.png'
    //     className='mr-3 mt-3 rounded-circle'
    //     width='150px'
    //   ></img>
    //   <h1> {course && course.courseTitle}</h1>
    //   <h2> {course && course.courseContent}</h2>

    //   {user && user.role == 'teacher' ? (
    //     <div style={{ width: '300px' }} className='mx-auto'>
    //       {/* <EditCourseModal /> */}
    //       <DeleteCourseModal delCourse={delCourse} />
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default CourseComp;
