import React, { createContext, useState } from 'react'

export const UrlDatasContext = createContext();

export default function UrlDatasContextComponent({ children }) {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0limit=20");
    return <UrlDatasContext.Provider value={{ url, setUrl }}>{children}</UrlDatasContext.Provider>
}
