import React from 'react';
import { useSelector } from 'react-redux';
import TeacherCard from './TeacherCard';

const OurTeam = (props) => {
  const users = useSelector((state) => state.userReducer.users);
  const teachers = users.filter((user) => user.role == 'teacher');
  console.log(users);
  console.log(teachers);
  return (
    <div>
      <section
        id='team'
        className='team  '
        style={{ backgroundColor: '#47cdc6' }}
      >
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <p style={{ color: 'white' }}>Teachers</p>
          </div>

          <div className='row'>
            {teachers.map((teacher) => (
              <TeacherCard teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
