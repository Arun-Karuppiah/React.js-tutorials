import React from "react";

const update=(Original,value)=>{
    class NewComp extends React.Component{
        constructor(){
            super()
            this.state={
                count:0
            }
        }
        inc=()=>{
            this.setState(prev=>{
                return{
                    count:prev.count+value
                }
            })
        }
        render(){
            return<>
            <Original count={this.state.count}
            increment={this.inc}
            {...this.props}/>
            </>
        }
    }
    return NewComp
}
export default update