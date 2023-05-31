import React from 'react';
import { useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`form-control ${
          meta.touched && meta.error ? 'is-invalid' : ''
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};
