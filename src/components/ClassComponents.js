import React, { Component } from 'react'

export default class ClassComponents extends React.Component {
    constructor (props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.state = {
            number : 1
        }
    }
    minusOne(){
        this.setState((test) => {
            return {
                number : ''
            }
        })
    }
    addOne(){
        this.setState((a) => {
            return {
                number : a.number + 1
            }
        })
    }
    minusOne(){
        this.setState((a) => {
            return {
                number : a.number - 1
            }
        })
    }
  render() {
    return (
      <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.addOne}>+1</button>
      </div>
    )
  }
}
// class Person{
//     constructor(name="Ramal",year = 1900){
//         this.name = name
//         this.year = year
//         this.state = {
//             number : 0
//         }
//     }
//     calculateAge(){
//        return new Date().getFullYear() - this.year
//     }
// }
// class Teacher extends Person {
//     constructor(){

//     }
// }
// const person1 = new Person("Ramal",2009)
// console.log(person1.calculateAge());