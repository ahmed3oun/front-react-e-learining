import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {
  faCoffee,
  faPenAlt,
  faBookOpen,
  faQuestion,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = (props) => {
  return (
    <div className='sec ' id='about' style={{ backgroundColor: '#f5f6f7' }}>
      <section
        className='content-section  text-black text-center'
        id='services'
      >
        <div className='container'>
          <div className='section-title'>
            <p>Etudik</p>
            <p>The Best E-learn Platform To Take Your Kids To The Next Level</p>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-3 col-md-6'>
              <span className='service-icon rounded-circle mx-auto mb-3'>
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  style={{ fontSize: 70, color: '#556272' }}
                />
              </span>
              <h4 className='mt-5'>
                <strong>E-Learning</strong>
              </h4>
              <p className='text-faded mb-0'>
                Take The First Step To Learn With Us
              </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
              <span className='service-icon rounded-circle mx-auto mb-3'>
                <FontAwesomeIcon
                  icon={faPenAlt}
                  style={{ fontSize: 70, color: '#556272' }}
                />
              </span>
              <h4 className='mt-5'>
                <strong>Study</strong>
              </h4>
              <p className='text-faded mb-0'>
                All study opportunities in one single place
              </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
              <span className='service-icon rounded-circle mx-auto mb-3'>
                <FontAwesomeIcon
                  icon={faBookOpen}
                  style={{ fontSize: 70, color: '#556272' }}
                />
              </span>
              <h4 className='mt-5'>
                <strong>Courses</strong>
              </h4>
              <p className='text-faded mb-0'>
                Online courses to learn anywhere
              </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-5 mb-md-0'>
              <span className='service-icon rounded-circle mx-auto mb-3'>
                <FontAwesomeIcon
                  icon={faQuestion}
                  style={{ fontSize: 70, color: '#556272' }}
                />
              </span>
              <h4 className='mt-5'>
                <strong>Quizz</strong>
              </h4>
              <p className='text-faded mb-0'>for all levels</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
