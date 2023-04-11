import React from "react";

var input=prompt()
class calcul extends React.Component{

    constructor(){
        super()
        this.state={
            ans:0
        }
    }
    
    add(){
        var inputs=prompt()
        input=Number(inputs)+Number(input)
        
    }

    subtract(){
        var inputs=prompt()
        input=Number(input)-Number(inputs)
        
    }

    mul(){
        var inputs=prompt()
        input=Number(input)*Number(inputs)
        
    }

    div(){
        var inputs=prompt()
        input=Number(input)/Number(inputs)
        
    }

    equalto=()=>{
        alert(`The answer is ${input}`)
    }

    render(){
        return(
            <div><button onClick={this.add}>ADD </button>
            <button onClick={this.subtract}>SUBTRACT </button>
            <button onClick={this.mul}>MULTIPLY</button>
            <button onClick={this.div}>DIVIDE</button>
            <button onClick={this.equalto}>=</button></div>
        )
    }
}

export default calcul