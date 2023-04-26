import React, { createContext, useContext, useState } from 'react'

const WFileContext = createContext();

export const useWFileContex = () => {

    const dataContex = useContext(WFileContext);
    return dataContex

}

export default function FileContexProvider({ children }) {

    const [curentfile, setCurentfile] = useState(null)


    return (
        <WFileContext.Provider value={{
            curentfile,
            setCurentfile
        }} >
            {children}
        </WFileContext.Provider>
    )
}
