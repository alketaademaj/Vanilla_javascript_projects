import React, {useState} from 'react'
//import Counter from './Counter'

//<Counter/>

export default function FunctionPractice() {

    const [Counter, setCounter] = useState({counter1:0,counter2:20}) //useState hook 


    return (
        <div>
            <h1>{Counter.counter1}</h1>
            <h1>{Counter.counter2}</h1>
            <button onClick = {() => setCounter(()=>Counter.counter1=Counter.counter1+1)}> Increment </button>
            <button onClick = {() => setCounter(()=>Counter.counter2=Counter.counter2-1)}> Increment </button>
            <button onClick = {() => {
                setCounter({counter1:0,counter2:20})
            }}
            > Reset </button>
        </div>
    )
}
