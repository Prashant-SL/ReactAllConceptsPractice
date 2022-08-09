import React from 'react';
import { Fname, Lname } from './UseContextAPI';

function Child2() {
    return (
        <Fname.Consumer>
            {(name) => {
                return (
                    <Lname.Consumer>
                        {(sirname) => {
                            return (
                                <h1>My Name Is <br /> {name}  S {sirname} </h1>
                            )
                        }}
                    </Lname.Consumer>
                )
            }}
        </Fname.Consumer>
    )
}

export default Child2