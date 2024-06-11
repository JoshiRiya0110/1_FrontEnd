import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement("div", {id: "parent"}, 
               React.createElement("div", {id: "child"}, 

               [React.createElement("h1",{}, "I am the heading"), React.createElement("h2",{}, "I am the seond sibling heading")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);