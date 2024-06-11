import React from "react";
import ReactDOM from "react-dom";


//React Element
const jsxHeading = (
  <div>
    <h1 className="head">Heading using jsx</h1>
    <h2>Second heading</h2>
  </div>
);


//React Component
//Class Based Component - OLD
//Functional Component - NEW


//React Element
const title =
    (
        <h1>Title</h1>
    );



//putting js code and react element inside react component
const number = 1000;

const HeadingComponent = () =>{
    return (
        <div>
            <h2>{number}</h2>
            {title}
            <h1>Functional Component</h1>
        </div>
    );
}


//Rendering functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
