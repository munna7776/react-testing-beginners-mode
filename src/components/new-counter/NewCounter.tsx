import React from 'react'

type NewCounterProps = {
    count: number;
    increment?: () => void;
    decrement?: () => void;
}

const NewCounter = (props: NewCounterProps) => {
  return (
    <div>
        <div>New Counter</div>
        <h1>{props.count}</h1>
        {
            props.increment && (
                <button onClick={props.increment} >Increment</button>
            )
        }
        {
            props.decrement && (
                <button onClick={props.decrement} >Decrement</button>
            )
        }
    </div>
  )
}

export default NewCounter
