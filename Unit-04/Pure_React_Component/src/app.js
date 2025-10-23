const Student = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h3", {}, "Chamith"),
        React.createElement("h3", {}, "23"),
        React.createElement("h3", {}, "Colombo"),
    ])
}

const StudentCard = ()=>{
    return React.createElement(
        "div",
        {className: "st-card"},
              [React.createElement("img",
                  {
                            src: "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
                            alt: "Student Image",
                            className: "student-image"
                        }),
                        React.createElement(Student)
              ]
    )
}


const App = ()=> {

    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, "My React App"),
        React.createElement(StudentCard),
        React.createElement(StudentCard),
        React.createElement(StudentCard)
        ]
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));