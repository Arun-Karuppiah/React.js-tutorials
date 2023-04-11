import React from 'react'
import axios from 'axios'

class Parent extends React.Component{

    handleClick =() => {
            axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(response=>{
                console.log(response)
                console.log(response.data)
            })
            .catch((error) => console.log('Error: ', error));
    };
    
    render(){
    return (
        <div>
            <button onClick={this.handleClick}>Click to send PATCH request</button>
        </div>
    );}
};

export default Parent;