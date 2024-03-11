import User from "./User";
import UserClass from "./UserClass";
import React from "react";
 
class About extends React.Component {
    constructor(){
        super();
        console.log("parent cons called");
    }
render (){
    console.log("parent render");
    return(
    <div>
        <User name={"Sumanth func"}/>
        <UserClass name={"first class"}/>
        <UserClass name={"second class"}/>
        <h1>This is About Us Page!!!</h1>
    </div>
);}
};

export default About;