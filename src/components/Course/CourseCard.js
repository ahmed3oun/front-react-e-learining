import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from 'reactstrap';

const CourseCard = ({ course }) => {
  const user = useSelector((state) => state.userReducer.user);
  const { courseTitle, courseDuration, _id, price, author } = course;
  return (
    <div class='col-12 col-sm-6 col-md-6 col-lg-4'>
      <Link to={`/course/${_id}`}>
        <div class='single-courses' style={{ height: '550px' }}>
          <div class='courses_banner_wrapper'>
            {' '}
            <div class='courses_banner'>
              <a href='#'>
                <img
                  src='https://premed.fr/wp-content/uploads/2019/07/hope-house-press-leather-diary-studio-IOzk8YKDhYg-unsplash.jpg'
                  alt=''
                  class='img-fluid'
                />
              </a>
            </div>
            <div class='purchase_price'>
              <a href='#' class='read_more-btn'>
                {price} Dt
              </a>
            </div>
          </div>

          <div class='courses_info_wrapper'>
            <div class='courses_title'>
              <h3>
                <a href='#'>{courseTitle}</a>
              </h3>
              <div class='teachers_namee'>
                Teacher -{' '}
                <a href='#' title=''>
                  {author}
                </a>
              </div>
            </div>

            <div class='courses_info'>
              <ul class='list-unstyled'>
                <li>
                  <i class='fas fa-calendar-alt'></i>
                  duration : {courseDuration} hours
                </li>
              </ul>

              {user && user.role == 'teacher' ? (
                <div
                  style={{ width: '90px', display: 'flex' }}
                  className='mx-auto'
                >
                  {/* <EditLevelModal level={level} />
                <DelLevelModal dellevel={delevel} /> */}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
