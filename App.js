import React from "react";
import ReactDOM from "react-dom/client";

//React
const Title = () => (
  <h1 className="heading" tabIndex="5">
    This is react application
  </h1>
);

//React functional component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">This is Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
