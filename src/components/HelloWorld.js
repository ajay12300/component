import React from 'react'

const HelloWorld=props =>
{
    console.log(props);
    return <h2>Hello {props.name} {props.surname}</h2>
}
export default HelloWorld;