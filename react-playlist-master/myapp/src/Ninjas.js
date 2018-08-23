import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        const { ninjas } = this.props;
        const ninijaList = ninjas.map(ninja =>{
            return{
                <div className="ninija" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                </div>
            }
        }) 
        return(
            <div className"ninja-list">
                { ninijaList }
            </div>
        )
    }
}

export default Ninjas
