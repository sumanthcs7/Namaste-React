import React, { useState } from "react";
const User=(props)=>{
    const [count]=useState(0);
    const [count2] = useState(1);
    return(
        <div className="user-card">
            <h1>{props.name}</h1>
            <h3>Software Engineer</h3>
            <h4>{count}:={count2}</h4>
        </div>
    )
}

export default User;