import React, { createContext } from 'react';
import Child1 from './Child1';

export const Fname = createContext();
export const Lname = createContext();
export const Msg = createContext("MESSAGE TO THE WORLD");

function UseContextAPI() {
    return (
        <div>
            <Fname.Provider value='Prashant'>
                <Lname.Provider value='Laxmeshwarmath'>
                    <Child1 />
                </Lname.Provider>
            </Fname.Provider>
        </div>
    )
}

export default UseContextAPI;