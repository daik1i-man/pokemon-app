import React, { createContext, useState } from 'react'

export const PagesUrlContext = createContext();

export default function PagesUrlContextComponent({ children }) {
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');
    return <PagesUrlContext.Provider value={{ nextPage, setNextPage, prevPage, setPrevPage }}>{children}</PagesUrlContext.Provider>

}
