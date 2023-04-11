import React from "react";
import { UserConsumer } from "./context";

class Child extends React.Component{
    render(){
        return<div>
            <UserConsumer>
                {
                    ak=>{
                        return <h1>{ak}</h1>
                    }
                }
            </UserConsumer>
        </div>
    }
}
export default Child