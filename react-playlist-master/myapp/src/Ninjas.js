import React, { Component } from 'react';

const Ninjas = ({ninjas}) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20){
            return (
                <div>
                    <div className="ninja" key={ninja.id}></div>
                    <div>Name: { ninja.name }</div>
                    <div>Name: { ninja.age }</div>
                    <div>Name: { ninja.belt }</div>
                </div>
            )
        } else {
            return null
        }
    })

    return(
        <div className="ninja-list">
        {ninjaList}
        </div>
    )

}
export default Ninjas
