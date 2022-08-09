import React from 'react';
import { useContext } from 'react';
import Child1 from './Child1';
import { Fname, Lname } from './Contexts/AllContexts';

function UseContextAPI() {
    const fname = useContext(Fname);
    return (
        <div>
            <h1> Fname using { }: {fname}</h1>
            <Fname.Provider value='Prashant'>
                <Lname.Provider value='Laxmeshwarmath'>
                    <Child1 />
                </Lname.Provider>
            </Fname.Provider>
        </div>
    )
}

export default UseContextAPI;