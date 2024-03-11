import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2:1,
        }
        console.log(this.props.name+" constructor");
    }
    componentDidMount(){
        console.log(this.props.name+" did mount")
    }
    render(){
        const {count, count2}=this.state;
        console.log(this.props.name+" render method");
        return(
            <div className="user-card">
                <h1>{this.props.name}</h1>
                <h3>Software Engineer</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Update count</button>
                <h2>{count}</h2>
            </div>
        )
    }
}
export default UserClass;