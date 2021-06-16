import React from 'react';

const TeacherCard = ({ teacher }) => {
  return (
    <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
      <div
        style={{ width: '300px', height: '340px' }}
        className='member'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <img src={teacher.avatar} className='img-fluid' alt='teacher photo' />
        <hr class='rounded' />
        <div className='member-info'>
          <h4>
            {teacher.lastName} {teacher.firstName}
          </h4>
          <span>{teacher.role}</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
