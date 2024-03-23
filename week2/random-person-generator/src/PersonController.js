import React, { useState, useEffect } from "react";
import Person from "./Person";

function PersonController() {
  const [personData, setPersonData] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const randomPerson = data.results[0];
      const formattedPersonData = {
        firstName: randomPerson.name.first,
        lastName: randomPerson.name.last,
        email: randomPerson.email,
      };
      setPersonData(formattedPersonData);
    } catch (error) {
      console.error("Error fetching random person:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []); 

  return <Person person={personData} />;
}

export default PersonController;
