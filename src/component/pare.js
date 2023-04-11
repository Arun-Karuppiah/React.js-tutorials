import React from "react";
import Chil from "./chil";
import Chil1 from "./chil1";

class Pare extends React.PureComponent{
    constructor(){
        super()
        this.state={
            message:'hello'
        }
    }

    render(){
        console.log("Parent")
        return<>
            <Chil name={this.state.message}/>
            <Chil1 name={this.state.message}/>
        </>
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                message:'Welcome 1'
            })
        },2000
        )
    }
}
export default Pare