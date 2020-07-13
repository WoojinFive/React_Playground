import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const templateId = 'template_BnNTqQ3z';
    sendFeedback(templateId, {
      message_html: data.message,
      from_name: data.name,
      reply_to: data.email,
      from_phone: data.phone,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const templateId = 'template_BnNTqQ3z';

  //   sendFeedback(templateId, {
  //     message_html: message,
  //     from_name: name,
  //     reply_to: email,
  //     from_phone: phone,
  //   });
  // };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        setSuccess(true);
        document.getElementById('contactForm').reset();
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }) // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  };

  const successMessage = success ? (
    <div id='success'>
      <div className='alert alert-success'>
        <strong>Thank you! Your message has been sent successfully!</strong>
      </div>
    </div>
  ) : null;

  return (
    <section className='page-section' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>Contact Me</h2>
            <h3 className='section-subheading text-muted'>
              Lets <span className='yellow'>K</span>
              <span className='yellowOrange'>E</span>
              <span className='orange'>E</span>
              <span className='red'>P</span> in{' '}
              <span className='redPink'>T</span>
              <span className='pink'>O</span>
              <span className='purple'>U</span>
              <span className='blue'>C</span>
              <span className='greenBlue'>H</span>
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <form
              id='contactForm'
              name='sentMessage'
              noValidate='novalidate'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='name'
                      name='name'
                      type='text'
                      placeholder='Your Name *'
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <p className='help-block text-danger'>
                        &#8251; Please enter your name.
                      </p>
                    )}
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Your Email *'
                      ref={register({
                        required: true,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && (
                      <p className='help-block text-danger'>
                        &#8251; Please enter your email address.
                      </p>
                    )}
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='phone'
                      name='phone'
                      type='tel'
                      placeholder='Your Phone *'
                      ref={register({ required: true })}
                    />
                    {errors.phone && (
                      <p className='help-block text-danger'>
                        &#8251; Please enter your phone number.
                      </p>
                    )}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      id='message'
                      name='message'
                      placeholder='Your Message *'
                      ref={register({ required: true })}
                    ></textarea>
                    {errors.message && (
                      <p className='help-block text-danger'>
                        &#8251; Please enter a message.
                      </p>
                    )}
                  </div>
                </div>
                <div className='clearfix'></div>
                <div className='col-lg-12 text-center'>
                  {successMessage}
                  <button
                    id='sendMessageButton'
                    className='btn btn-primary btn-xl text-uppercase'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
