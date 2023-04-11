import React,{Component} from "react";

class numcalc extends Component{
    constructor(){
    super()
    this.state={
        count:0
    }
};

inc(){
    this.setState({
        count:this.state.count+1
    },()=>console.log(this.state.count))
}

dec(){
    this.setState({
        count:this.state.count-1
    },()=>console.log(this.state.count))
}

mul(){
    this.setState({
        count:this.state.count*2999999999999999999999999999999999999999999999
    },()=>console.log(this.state.count))
}

render(){
    return(
        <div><h1>Count --{this.state.count}</h1>
        <button onClick={()=>{this.inc()}}>Increment</button>
        <button onClick={()=>{this.dec()}}>Decrement</button>
        <button onClick={()=>{this.mul()}}>Multiply</button></div>
    )
}
}
export default numcalc
