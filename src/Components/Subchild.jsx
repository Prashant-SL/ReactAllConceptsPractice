import React, { useContext } from 'react';
import { Msg } from './UseContextAPI';

const Subchild = () => {
    const msg = useContext(Msg);
    return (
        <div>
            {msg}
        </div>
    )
}

export default Subchild;