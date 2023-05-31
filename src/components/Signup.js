import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { validationSchema } from './validate';
import Success from './Success';

export const Signup = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleRegistration = (values) => {
    console.log(values);
    

    // Set the registration status to true
    setIsRegistered(true);
    // Set the form data
    setFormData(values);
  };

  return (
    <div>
      {isRegistered ? (
        <Success formData={formData} />
      ) : (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            mob: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegistration}
        >
          {(formik) => (
            <div>
              <h1 className="my-4 font-weight-bold display-4">User Sign Up</h1>
              <Form>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Date of Birth" name="dob" type="date" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Phone" name="mob" type="tel" />

                <button className="btn btn-dark mt-3" type="submit">
                  Register
                </button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">
                  Reset
                </button>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
};
