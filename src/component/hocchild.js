import React from "react";
import update from "./hocchild2";

class Child extends React.Component{
    render(){
        //const {count,increment}=this.props
        return<>
        <button onMouseOver={this.props.increment}>Clicked {this.props.count} times</button>
        </>
    }
}
export default update(Child,5)