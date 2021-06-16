import React, { Fragment } from 'react';
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
import { deleteLevel } from '../../redux/actions/levelActions';
import DelLevelModal from './DelLevelModal';
import EditLevelModal from './EditLevelModal';

const LevelCard = ({ level }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const { levelDescription, levelName, _id, nbOfCourses } = level;
  const delevel = () => {
    dispatch(deleteLevel(_id));
  };
  return (
    <div class='col-12 col-sm-6 col-md-6 col-lg-4 '>
      <div
        class='single-courses'
        style={{ backgroundColor: 'white', height: '550px' }}
      >
        <div class='courses_banner_wrapper'>
          {' '}
          <Link to={`/level/${_id}`}>
            <div class='courses_banner'>
              <a href='#'>
                <img
                  src='https://www.salondeletudiant.ch/wp-content/uploads/2020/10/istock-499343530.jpg'
                  alt=''
                  class='img-fluid'
                />
              </a>
            </div>
            <div class='purchase_price'>
              {/* <a href='#' class='read_more-btn'>
                $99.9
              </a> */}
            </div>
          </Link>
        </div>

        <div class='courses_info_wrapper'>
          <div class='courses_title'>
            <h3>
              <a href='#'>{levelName}</a>
            </h3>
            <div class='teachers_name'>{levelDescription} </div>
          </div>
          <div class='courses_info'>
            <ul class='list-unstyled'>
              <li>
                <i class='fas fa-calendar-alt'></i>
              </li>
              <li>
                <i class='fas fa-user'></i>
              </li>
            </ul>

            {user && user.role == 'teacher' ? (
              <div
                style={{ width: '90px', display: 'flex' }}
                className='mx-auto'
              >
                <EditLevelModal level={level} />
                <DelLevelModal dellevel={delevel} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
{
  /* <Card
        className='mt-5'
        style={{ width: '400px', height: '250px', margin: 'auto' }}
      >
        {' '}
        <Link to={`/level/${_id}`}>
          <CardImg
            top
            width='80%'
            src='https://www.salondeletudiant.ch/wp-content/uploads/2020/10/istock-499343530.jpg'
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle tag='h5'>{levelName}</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Card subtitle
            </CardSubtitle>
            <CardText>{levelDescription}</CardText>
          </CardBody>
        </Link>
        {user && user.role == 'teacher' ? (
          <div style={{ width: '300px' }} className='mx-auto'>
            <EditLevelModal level={level} />
            <DelLevelModal dellevel={delevel} />
          </div>
        ) : null}
      </Card> */
}

//
