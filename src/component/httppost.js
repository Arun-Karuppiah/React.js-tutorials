import React from "react";
import axios from "axios";

class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            userid:'',
            name:'',
            title:''
        }
    }
    handle=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submit=(e)=>{
        e.preventDefault()
        //console..log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response=>{
            console.log(Response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {userid,name,title}=this.state
        return<div>
            <form onSubmit={this.submit}>
                <input type='text' name='userid' value={userid} onChange={this.handle}/>
                <input type='text' name='name' value={name} onChange={this.handle}/>
                <input type='text' name='title' value={title} onChange={this.handle}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    }
}
export default Parent