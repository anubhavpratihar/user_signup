import React from 'react';

function Success({ formData }) {
  if (!formData) {
    return null; // Return null or show a loading state if desired
  }

  const { firstName, lastName, dob, email, mob } = formData;

  return (
    <div className="jumbotron">
      <h1 className="display-4">Awesome!</h1>
      <p className="lead">You have been successfully registered!</p>
      <hr className="my-4" />

      <h2>Registration Details:</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Date of Birth:</strong> {dob.toString()}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {mob}
      </p>
    </div>
  );
}

export default Success;
