import React from 'react';
import { Fname } from './UseContextAPI';

function Child2() {
    return (
        <div>
            Child2
            <Fname.Consumer>
                {(name) => {
                    return (
                        <h1>My Name Is {name}</h1>
                    )
                }}
            </Fname.Consumer>
        </div>
    )
}

export default Child2