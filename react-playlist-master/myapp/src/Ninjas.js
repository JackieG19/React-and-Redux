import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        console.log(this.props);

        return{
            <div className="ninija">
            <div>Name: {this.prop.name}</div>
            <div>Age: {this.prop.age}</div>
            <div>Belt: {this.prop.belt}</div>
            </div>
        }
    }
}

export default Ninjas
