import React from "react";
import update from "./hocchild2";

class Parent extends React.Component{
    render(){
        //const {count,increment}=this.props
        return<>
        <button onClick={this.props.increment}>Clicked {this.props.count} times {this.props.name}</button>
        </>
    }
}
export default update(Parent,5)