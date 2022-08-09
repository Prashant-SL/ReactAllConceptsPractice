import React, { useContext } from 'react';
import Child2 from './Child2';
import { Msg } from './UseContextAPI';

function Child1() {

    const msg = useContext(Msg)
    return (
        <div>
            {msg}
            <Child2 />
        </div>
    )
}

export default Child1