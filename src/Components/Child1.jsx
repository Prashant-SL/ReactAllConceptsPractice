import React, { useContext } from 'react';
import Child2 from './Child2';
import Subchild from './Subchild';
import { Msg } from './UseContextAPI';

function Child1() {

    const msg = useContext(Msg)
    return (
        <>
            <Child2 />
            <Subchild />
        </>
    )
}

export default Child1;