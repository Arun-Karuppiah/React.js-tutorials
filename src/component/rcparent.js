import React from "react";
import Rcchild from './rcchild'
import { UserContext } from "./context";

class Parent extends React.Component{
    static contextType=UserContext
    render(){
        return(
            <div>
            <h1>Here is {this.context}</h1>
            <h1><Rcchild/></h1>
            </div>
        )
    }
}
export default Parent