import React from "react";

class Child extends React.Component{
    render(){
        return<><button onMouseOver={this.props.inc}>Clicked {this.props.count} times</button></>
    }
}
export default Child