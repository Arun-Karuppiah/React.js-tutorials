import React from "react";

class Condi extends React.Component{
    constructor(){
        super()
        this.state={
            islogged:true
        }
    }
    render(){

       // if(this.state.islogged){
       //     return <h1>WELCOME</h1>
       // }
       // else{
       //     return <h1>NOT WELCOME</h1>
       // }

       //var message
       //if(this.state.islogged){
       // message=<h1>WELCOME</h1>
       //}
       //else{
       // message=<p>NOT WELCOME</p>
       //}
       //return message

       //return this.state.islogged?<h1>WELCOME</h1>:<h1>NOT WELCOME</h1>

       return this.state.islogged && <h1>WELCOME</h1>
    }
}
export default Condi