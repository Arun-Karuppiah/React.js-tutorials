import React from "react";

class New extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    inc=()=>{
        this.setState(prev=>{
            return{
            count:prev.count+1}
        })
    }
    render(){
        return<h1>{this.props.name(this.state.count,this.inc)}</h1>
    }
}
export default New