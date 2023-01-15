import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form as BootstrapForm } from 'react-bootstrap';
import Button from '../../components/Button/Button';

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Perform login logic here
  };

  return (
    <>
      <Row className='justify-content-center'>
        <Col xs={6}>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Username</BootstrapForm.Label>
                  <Field name='username' type='text' className='form-control' />
                  <ErrorMessage
                    name='username'
                    component='div'
                    className='text-danger'
                  />
                </BootstrapForm.Group>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <Field
                    name='password'
                    type='password'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='text-danger'
                  />
                </BootstrapForm.Group>
                <Button type='submit' disabled={isSubmitting}>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <div className='text-center'>
            <Link to='/create-account'>Create new account</Link>
            <span> | </span>
            <Link to='/forgot-password'>Forgot password</Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
