import React, { createContext } from 'react';
import Child1 from './Child1';

export const Fname = createContext();
// export const Lname = createContext();

function UseContextAPI() {
    return (
        <div>UseContextAPI
            <Fname.Provider value='Prashant'>
                {/* <Lname.Provider value='Laxmeshwarmath'> */}
                <Child1 />
                {/* </Lname.Provider> */}
            </Fname.Provider>
        </div>
    )
}

export default UseContextAPI;