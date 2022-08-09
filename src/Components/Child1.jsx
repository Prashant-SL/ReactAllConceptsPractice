import React, { useContext } from 'react';
import Child2 from './Child2';
import { Msg } from './Contexts/AllContexts';
import Subchild from './Subchild';

function Child1() {

    const msg = useContext(Msg);
    return (
        <>
            <Child2 />
            <Subchild />
        </>
    )
}

export default Child1;