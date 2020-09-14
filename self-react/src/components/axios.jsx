import React, { Component } from 'react'
import axios from 'axios';
// import { data } from 'jquery';

export class Axios extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Storage: [],
             Number:0
        }
    }

    //If I want to pass a specific part of objects value, I need to give it a key (only if you want to pass the data as an object)
    //Storage: {Key: Response.data.title}
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/10').then(Response => {
            this.setState ({
            Storage: [Response.data.title, Response.data.body]
            })
            console.log(Response.data)
    });
}

    Inputting = (e) =>{ //passing to function = argument()
        this.setState({
         Number: e.target.value
        })
        console.log(this.state.Number)
    }

    Inputting1 = (e) =>{ //passing to function = argument()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.Number}`).then(Response => {
            this.setState ({
            Storage: [Response.data.title, Response.data.body]   
            })
        })
        console.log(this.state.Number)
    }

    //{this.state.Storage.map((e) => <h3>{e}</h3>)} ====> No need for the for looop, you can dislpay it 
    //like this too (arrays data)

    render() {
        return (
            <div>
                    <h1>Nononono</h1>
                    <p> Idk what tans is talking about :P </p>
                    <input type="number" value = {this.state.Number} onChange = {this.Inputting}></input>

                    <button onClick = {this.Inputting1}>Click it</button>
    
                    <h2>{this.state.Storage[0]}</h2>
                    <h3>{this.state.Storage[1]}</h3>
            </div>
        )
    }
}

export default Axios
