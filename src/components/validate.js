import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  dob: Yup.date()
    .max(new Date(), 'Date of Birth cannot be in the future')
    .required('Date of Birth is required')
    .test('age', 'You must be at least 18 years old', function (value) {
      const currentDate = new Date();
      const userDate = new Date(value);
      const age = currentDate.getFullYear() - userDate.getFullYear();
      return age >= 18;
    }),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  mob: Yup.string()
    .matches(/^[0-9]+$/, 'Mobile is invalid')
    .required('Mobile Number is required'),
});
