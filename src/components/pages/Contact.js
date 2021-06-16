import React from 'react';
import bg from '../pages/testimonials-bg.jpg';
import { Button } from 'reactstrap';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from 'reactstrap';
function Contact() {
  return (
    <div>
      <section id='contact' className='contact'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <p style={{ color: '#556272' }}>Contact Us</p>
          </div>

          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='info'>
                <div className='address'>
                  <i className='icofont-google-map'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='#ff6a66'
                      class='bi bi-geo-alt-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                    </svg>
                  </i>
                  <h4>Location:</h4>
                  <p>Manouba,Tunis,Tunisia</p>
                </div>

                <div className='email'>
                  <i className='icofont-envelope'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='#ff6a66'
                      class='bi bi-envelope-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
                    </svg>
                  </i>
                  <h4>Email:</h4>
                  <p>conact@etudik.com</p>
                </div>

                <div className='phone'>
                  <i className='icofont-phone'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='#ff6a66'
                      class='bi bi-telephone-fill'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                      />
                    </svg>
                  </i>
                  <h4>Call:</h4>
                  <p>71 568 984</p>
                </div>
              </div>
            </div>

            <div className='col-lg-8 mt-5 mt-lg-0'>
              <form className='php-email-form'>
                <div className='form-row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Your Name'
                      data-rule='minlen:4'
                      data-msg='Please enter at least 4 chars'
                    />
                    <div className='validate'></div>
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      data-rule='email'
                      data-msg='Please enter a valid email'
                    />
                    <div className='validate'></div>
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 8 chars of subject'
                  />
                  <div className='validate'></div>
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    data-rule='required'
                    data-msg='Please write something for us'
                    placeholder='Message'
                  ></textarea>
                  <div className='validate'></div>
                </div>
                <div className='mb-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message'></div>
                  <div className='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
{
  /* <Form classNameName='text-left bg-light font-weight-bold mt-5'>
<FormGroup>
  <Label for='first'>First Name</Label>
  <Input type='text' name='first' id='frst' placeholder='' required />
</FormGroup>

<FormGroup>
  <Label for='last'>Last Name</Label>
  <Input type='text' name='last' id='last' placeholder='' required />
</FormGroup>

<FormGroup>
  <Label for='exampleAddress'>Address</Label>
  <Input
    type='text'
    name='address'
    id='exampleAddress'
    placeholder=''
    required
  />
</FormGroup>

<FormGroup>
  <Label for='mail'>Email</Label>
  <Input type='email' name='mail' id='mail' placeholder='' required />
</FormGroup>

<FormGroup>
  <Label for='examplePassword'>Password</Label>
  <Input
    type='password'
    name='password'
    id='examplePassword'
    placeholder=''
    required
  />
</FormGroup>

<FormGroup>
  <Label for='exampleText'>How would you describe yourself ?</Label>
  <Input type='textarea' name='description' id='description' required />
</FormGroup>

<FormGroup>
  <Label for='exampleFile'>Upload Photos</Label>
  <Input type='file' name='file' id='exampleFile' />
  <FormText color='muted'>
    Please upload one or more photos you have taken in Tunisia
  </FormText>
</FormGroup>
<div classNameName='mx-auto col-6 mt-5'>
  <Button color='primary' classNameName='ml-5'>
    Confirm
  </Button>
  <Button color='secondary' classNameName='ml-5'>
    Cancel
  </Button>
</div>
</Form> */
}
