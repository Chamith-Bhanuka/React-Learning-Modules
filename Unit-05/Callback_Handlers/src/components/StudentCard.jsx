// const StudentCard = (props) => {
//   return React.createElement("div", { className: "st-card" }, [
//     React.createElement("img", {
//       src: "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
//       alt: "Student Image",
//       className: "student-image",
//     }),
//     React.createElement(Student, { ...props }, null),
//   ]);
// };

import Student from "./Student";
import React from "react";
import PropTypes from "prop-types";

const StudentCard = ({ name, age, homeTown }) => {
  return (
    <div className="st-card">
      <img
        src="https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png"
        alt={`Student Image_${name}`}
        className="student-image"
      />
      <Student name={name} age={age} homeTown={homeTown} />
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  homeTown: PropTypes.string,
};

export const test = 85;

export default StudentCard;
