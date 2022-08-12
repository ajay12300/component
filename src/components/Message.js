import React, {Component} from 'react'
class Message extends Component
{
constructor()
{
    super()
    this.state=(
        {
          message:'HELLO M17 STUDENTS'
        }
    )
}
changeMessage()
{
    this.setState(
        {
            message:'YOU are Placed at CG'
        }
    )
}

    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>CLICK ME</button>
            </div>
        )
    }
}
export default Message;