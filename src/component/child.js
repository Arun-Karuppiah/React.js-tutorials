import React from 'react'

function child(props){
    return <button onClick={(p)=>{props.a('Father')}}>Click</button>
}

export default child