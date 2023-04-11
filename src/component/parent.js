import React from 'react';
import Child from './child'

class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            message:"parent"
        }
    }
    
    par(ab){
        alert(`Hello ${this.state.message} from ${ab}`)
    }

    render(){
        return <Child a={this.par.bind(this)}/>
    }
}

export default Parent