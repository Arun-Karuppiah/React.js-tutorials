//2 input calculator

import React from "react";

let style={
    color:'green'
}

class Calci extends React.Component{
    constructor(){
        super()
        this.state={
            num1:0,
            num2:0,
            ans:0
        }
    }

    chnage1=(event)=>{
        this.setState({
            num1:event.target.value
        })
    }

    chnage2=(event)=>{
        this.setState({
            num2:event.target.value
        })
    }
    
    add=(event)=>{
        event.preventDefault()
        this.setState({
            ans:Number(this.state.num1)+Number(this.state.num2)
        },()=>console.log(this.state.ans))
    }

    sub=(event)=>{
        event.preventDefault()
        this.setState({
            ans:Number(this.state.num1)-Number(this.state.num2)
        },()=>console.log(this.state.ans))
    }

    mul=(event)=>{
        event.preventDefault()
        this.setState({
            ans:Number(this.state.num1)*Number(this.state.num2)
        },()=>console.log(this.state.ans))
    }

    div=(event)=>{
        event.preventDefault()
        this.setState({
            ans:Number(this.state.num1)/Number(this.state.num2)
        },()=>console.log(this.state.ans))
    }

    render(){
        return(
            <form>
                <label>FIRST NUM</label>
                <input type='text' value={this.state.num1} onChange={this.chnage1}/>
                <br/>
                <br/>
                <label>SECOND NUM</label>
                <input type='text' value={this.state.num2} onChange={this.chnage2}/>
                <br/>
                <br/>
                <button onClick={this.add} style={style}>ADD</button>
                <button onClick={this.sub}>SUBTRACT</button>
                <button onClick={this.mul}>MULTIPLY</button>
                <button onClick={this.div}>DIVIDE</button>
                <h1>THE ANSWER IS {this.state.ans}</h1>
            </form>
        )
    }
}

export default Calci