import React from "react";

class List extends React.Component{
    render(){
        //var a=["Tony","Stark","Steve"]
        //return <h1>{a.map(x=><h1>{x}</h1>)}</h1>

        var a=[{id:1,name:"Tony",job:"Developer"},{id:2,name:"Stark",job:"Tester"},{id:3,name:"Tony",job:"React"}]

        //return <h1>{a.map(x=><h1>My name is {x.name} working as {x.job}</h1>)}</h1>

        //return <h1>{a.map(x=><h1 key={x.id}>My name is {x.name} working as {x.job}</h1>)}</h1>
        
        return <div>{a.map((x,index)=><h1 key={index}>My name is {x.name} working as {x.job} at index {index}</h1>)}</div>
    }
}

export default List