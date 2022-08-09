import React, { useContext } from 'react';
import { Fname, Msg } from './Contexts/AllContexts';

const Subchild = () => {
    const msg = useContext(Msg);
    const fname = useContext(Fname);
    return (
        <div>
            {msg}
            {fname}
        </div>
    )
}

export default Subchild;