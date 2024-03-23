import React from "react";

function Person({ person }) {
  if (!person) return null;

  return (
    <ul>
      <li>First Name: {person.firstName}</li>
      <li>Last Name: {person.lastName}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
}

export default Person;
