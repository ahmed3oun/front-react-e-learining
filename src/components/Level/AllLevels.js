import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLevels } from '../../redux/actions/levelActions';
import LevelCard from './LevelCard';
import { Button, CardGroup } from 'reactstrap';
import AddLevelForm from './AddLevelForm';
import { getAuthUser } from '../../redux/actions/userActions';
import BackDash from '../pages/BackDash';
import LevelCardDash from './LevelCardDash';

import{ getAdminStudents } from '../../redux/actions/studentActions'
const AllLevels = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getAuthUser());
    dispatch(getAdminStudents());
  }, [dispatch]);
    
  const students = useSelector((state) => state.students);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <BackDash />
      <main id='main'>
        <section
          class='breadcrumbs'
          // style={{
          //   padding: '20px 10px 0px;',
          //   backgroundColor: '#faffff',
          //   boxShadow: '0px 5px 5px rgb(165, 165, 165)',
          // }}
        >
          <div class='container'>
            <div class='d-flex justify-content-between align-items-center'>
              <div className='section-title'>
                <img src='/etudiklogo.png' alt='' width='200px' />
              </div>

              <ol></ol>
              {/* <h1 style={{ textAlign: 'center' }}>
                {user && user.role == 'teacher' ? <AddLevelForm /> : null}
              </h1> */}
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
              {console.log(students)}
              {students &&
                students.map((student) => (
                  <LevelCardDash level={student} key={student._id} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllLevels;

{
  /*  */
}

{
  /*  <section class="inner-page d-flex">
  <div class="container">
    <p>
      Example inner page template3
    </p>
    <h1>Welcome to your Levels</h1>
    <h1>{user && user.role == 'teacher' ? <AddLevelForm /> : null}</h1>
    <div
  className='card-columns'
 
>
  {console.log(levels)}
  {levels &&
    levels.map((level) => <LevelCard level={level} key={level._id} />)}
</div>
  </div>
</section> */
}
