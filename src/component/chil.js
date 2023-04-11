import React from "react";

class Chil extends React.PureComponent{
    render(){
        console.log("Child")
        return <h1>{this.props.name}</h1>
    }
}
export default Chil