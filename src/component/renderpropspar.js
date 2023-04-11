import React from "react";

class Parent extends React.Component{
    render(){
        return<><button onClick={this.props.inc}>Clicked {this.props.count} times</button></>
    }
}
export default Parent