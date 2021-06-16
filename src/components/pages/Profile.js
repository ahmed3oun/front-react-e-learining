import React from 'react';
import { useSelector } from 'react-redux';
import { H5 } from 'reactstrap';
import BackDash from './BackDash';
import EditProfileModal from './EditProfileModal';
import { Progress } from 'reactstrap';
import './profile.css';
const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  if (!user) {
    return <h1>not allowed Please login or register</h1>;
  }

  return (
    <div>
      <BackDash />
      <main id='main'>
        <section className='breadcrumbs'>
          <div class='container'>
            <div class='d-flex justify-content-between align-items-center'>
              <div className='section-title'>
                <img src='/etudiklogo.png' alt='' width='200px' />
              </div>

              <ol></ol>
              <h1 style={{ textAlign: 'center' }}>
                {/* {user.role == 'teacher' ? <EditProfileModal /> : null} */}
                <EditProfileModal />
              </h1>
            </div>
          </div>
        </section>
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '20px',
          }}
        >
          <div class='col-lg-4 '>
            <div class='text-center card-box teacher-info '>
              <div class='member-card pt-2 pb-2'>
                <div class='thumb-lg member-thumb mx-auto'>
                  <img
                    src="data:image/png;base64,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"
                    class='rounded-circle img-thumbnail'
                    alt='profile-image'
                  />
                </div>
                <div class='mt-2'></div>
                <ul class=' mt-5 social-links list-inline'>
                  <li class='list-inline-item'>
                    <a href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                        fill='#82d3ff'
                        class='bi bi-facebook'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                      </svg>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                        fill='#82d3ff'
                        class='bi bi-facebook'
                        viewBox='0 0 16 16'
                      >
                        <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                      </svg>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                        fill='#82d3ff'
                        class='bi bi-facebook'
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class='col-sm-6
           teacher-info card-box'
          >
            <ul class='list-unstyled'>
              <li>
                <h3>
                  Full Name : <span>{user.name}</span>
                </h3>
              </li>
              
              <li>
                <h3>
                  Role : <span>{user.role}</span>
                </h3>
              </li>
              <li>
                <h3>
                  Email : <span>{user.email}</span>
                </h3>
              </li>
              {/* <li>
                <h3>
                  Phone : <span>{user.phone}</span>
                </h3>
              </li> */}
              {/* {user.role == 'teacher' ? (
                <>
                  <li>
                    <h3>Skills :</h3>
                  </li>
                  <li>
                    <h5 className='text-center '>HTML5</h5>
                    <Progress
                      striped
                      animated
                      color='primary'
                      value='4.5 '
                      max='5'
                    ></Progress>
                  </li>
                  <li>
                    <h5 className='text-center mt-2 '>CSS3</h5>
                    <Progress
                      striped
                      animated
                      color='primary'
                      value='4 '
                      max='5'
                    ></Progress>
                  </li>
                  <li>
                    <h5 className='text-center mt-2 '>NodeJS</h5>
                    <Progress
                      striped
                      animated
                      color='primary'
                      value='4.2 '
                      max='5'
                    ></Progress>
                  </li>
                  <li>
                    <h5 className='text-center mt-2 '>Bootstrap</h5>
                    <Progress
                      striped
                      animated
                      color='primary'
                      value='4.8 '
                      max='5'
                    ></Progress>
                  </li>
                </>
              ) : null} */}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
