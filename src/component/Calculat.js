import React from 'react'

class Calculat extends React.Component{
    constructor(){
        super()
        this.inputref=React.createRef()
        this.state={
            message:''
        }
    }

    change=(event)=>{
        this.setState({
            message:event.target.value
        })
    }

    handle=(event)=>{
        this.setState({
           message: this.state.message + event.target.value})
    }
    
    backspace=(event)=>{
        this.setState({
            message:this.state.message.slice(0,-1)
        })
    }
    
    clearall=(event)=>{
        event.preventDefault()
        this.setState({
            message:''
        })
    }

    result(){
        document.getElementById("result").innerHTML = eval(this.state.message);
    }

    componentDidMount(){
        this.inputref.current.focus()
    }

    mov=(event)=>{
        const form=event.target.form
        const index=[...form].indexOf(event.target)

        if(event.key==="Enter"){
            document.getElementById("result").innerHTML = eval(this.state.message);
            form.elements[index+1].focus()
            event.preventDefault()
        }
    }

render(){
    return(
<div>
<form>
<input type = "text" onChange={this.change} ref={this.inputref} value={this.state.message} className='calci' onKeyDown={this.mov}/>
<br/>
<br></br>
<button type='button' onClick={this.result.bind(this)}>Ans</button>
<button   onClick={this.clearall}>Clear all</button>
<button type='button' onClick={this.backspace}>Backspace</button>
<br></br>
<br></br>


<button type='button' className='spacing2' onClick={this.handle} value="+" >+ </button> 
<button type='button' className='spacing2' onClick={this.handle} value="-"> -</button>
<button type='button' className='spacing2' onClick={this.handle} value="*"> *</button>
<button type='button' className='spacing2' onClick={this.handle} value="/"> /</button>

<br></br>
<br></br>
<button type='button' className='spacing1' onClick={this.handle} value="1" >1 </button> 
<button type='button' className='spacing1' onClick={this.handle} value="2"> 2</button>
<button type='button' className='spacing1' onClick={this.handle} value="3"> 3</button>

<br></br>
<button type='button' className='spacing1' onClick={this.handle} value="4" >4 </button> 
<button type='button' className='spacing1' onClick={this.handle} value="5"> 5</button>
<button type='button' className='spacing1' onClick={this.handle} value="6"> 6</button>
<br></br>
<button type='button' className='spacing1' onClick={this.handle} value="7" >7 </button> 
<button type='button' className='spacing1' onClick={this.handle} value="8"> 8</button>
<button type='button' className='spacing1' onClick={this.handle} value="9"> 9</button>
<br></br>

<button type='button' className='spacing1' onClick={this.handle} value="#"> #</button>
<button type='button' className='spacing1' onClick={this.handle} value="0"> 0</button>
<button type='button' className='spacing1' onClick={this.result.bind(this)}> =</button>

</form>
<div className='resu'>
<h1><span>The Result is </span><span id='result'></span></h1></div>
</div>

    )
}
}
export default Calculat