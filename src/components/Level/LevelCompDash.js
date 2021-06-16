import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getAllCoursesOfLevel } from '../../redux/actions/courseActions';
import { getOneLevel } from '../../redux/actions/levelActions';
import { Button, CardGroup } from 'reactstrap';
import CourseCard from '../Course/CourseCard';
import AddCourseForm from '../Course/AddCourseForm';
import BackDash from '../pages/BackDash';
const LevelCompDash = ({ match }) => {
  //   const { levelDescription, levelName, _id } = level;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoursesOfLevel(match.params.id));
  }, []);

  const courses = useSelector((state) => state.courseReducer.courses);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <>
      <div>
        <BackDash />
        <main id='mainlvl'>
          <section class='breadcrumbs'>
            <div class='container'>
              <div class='d-flex justify-content-between align-items-center'>
                <div className='section-title'>
                  <img src='/etudiklogo.png' alt='' width='200px' />
                </div>

                <ol></ol>
                <h1 style={{ textAlign: 'center' }}>
                  {user && user.role == 'teacher' ? (
                    <AddCourseForm level={match.params.id} />
                  ) : null}
                </h1>
              </div>
            </div>
          </section>

          <section
            class='popular_courses mt-2'
            style={{ justifyContent: 'space-around' }}
          >
            <div class='container'>
              <div class='col-12 col-sm-12 col-md-12 col-lg-12'> </div>
              <div class='row col-12 col-sm-12 col-md-12 col-lg-12'>
                {courses &&
                  courses.map((course) => (
                    <CourseCard course={course} key={course._id} />
                  ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* <div>
        <Button href='/levels' color='success'>
          back to levels
        </Button>
        <h1>
          {user && user.role == 'teacher' ? (
            <AddCourseForm level={match.params.id} />
          ) : null}
        </h1>

        <section
          class='popular_courses'
          style={{ justifyContent: 'space-around' }}
        >
          <div class='container'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-12'> </div>
            <div class='row col-12 col-sm-12 col-md-12 col-lg-12'>
              {courses &&
                courses.map((course) => (
                  <CourseCard course={course} key={course._id} />
                ))}
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default LevelCompDash;
