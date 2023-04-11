import React from "react";

class Chil1 extends React.PureComponent{
    render(){
        console.log("Child1")
        return <h1>{this.props.name}</h1>
    }
}
export default Chil1