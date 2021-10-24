import React, { useEffect, useState } from "react";
import { people } from "./GroupData";

function Group() {
  const [people, setPeople] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);

      return () => {
        clearInterval(slider);
      };
    }, 5000);
  }, [index]);
  return <div>

      {people.map((person, personIndex) => {
                const { id, image, name, last,  } = person;

                let position = 'nextSlide';
                if (personIndex === index) {
                  position = 'activeSlide';
                }
                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === people.length - 1)
                ) {
                  position = 'lastSlide';
                }

                return (

                )
      })}
  </div>;
}

export default Group;
