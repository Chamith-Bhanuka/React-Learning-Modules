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

import Student from "../components/Student";

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

export const test = 85;

export default StudentCard;
