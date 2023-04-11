import React from "react";
import axios from 'axios'

class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            post:[],
            error:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({post:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({error:'Data not Found'})
        })
    }
    render(){
        const {post}=this.state
        return<div><h1>Sample page{
            post.length?post.map(a=><div key={a.id}>{a.body}</div>):null
            }
        {this.state.error}
        </h1></div>
    }
}
export default Parent