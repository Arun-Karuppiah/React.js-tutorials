import React from "react";

let style={
    color:'red',
    fontsize:'40px'
}

class Form extends React.Component{
    constructor(){ 
        super()
        this.state={
            message : 'welcome',
            comments : 'eg',
            select : 'sel'
        }
    }

    chnage=(event)=>{
        this.setState({
            message:event.target.value
        })
    }

    changecomms=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    changesel=(event)=>{
        this.setState({
            select:event.target.value
        })
    }

    submit=(event)=>{
        alert(`${this.state.message} and ${this.state.comments} and ${this.state.select}`)
    }

    render(){
        return <form onSubmit={this.submit}>
            <div>
                <label style={style}>Username</label>
                <input type='text' value={this.state.message} onChange={this.chnage}/>
                <br/>
                <br/>
                <label style={style}>Comments</label>
                <textarea value={this.state.comments} onChange={this.changecomms}></textarea>
                <br/>
                <br/>
                <label style={style}>Select</label>
                <select value={this.state.select} onChange={this.changesel}>
                    <option value="React">React</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                </select>
                <br/>
                <br/>
                <button type='submit' style={style}>Submit</button>
            </div>
        </form>
    }
}

export default Form