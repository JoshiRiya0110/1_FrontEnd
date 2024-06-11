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

const Title = () =>{
    return(
        <h1>Title</h1>
    )
}

const HeadingComponent = () =>{
    return (
        <div>
            <Title/>
            <h1>Functional Component</h1>
        </div>
    );
}


//Rendering functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
