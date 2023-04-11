import React from "react";
import axios from "axios";

class Parent extends React.Component{
    constructor(){
        super()
            this.state={
                id:'7',
                title:'arun',
                body:'Welcome Arun to class',
                Userid:'3',
            }
        
    }
    handle=()=>{
        axios.put('https://jsonplaceholder.typicode.com/posts/1',this.state)
        .then(response=>{
            console.log(response)
            console.log(response.data)
        })
        .catch((error) => console.log('Error: ', error));
    }

    render(){
        return(<div>
            <button onClick={this.handle}>Click to PUT Request</button>
        </div>)
    }
}
export default Parent