import React from 'react'
import DatasContextComponent from './DatasContextComponent/DatasContextComponent'
import PagesUrlContextComponent from './PagesUrl/PagesUrlContext'
import UrlDatasContextComponent from './UrlDatas/urlDatasContext'
import SearchInpuValueContextComponent from './searchInputValueContext/searchInpuValueContext'

export default function Provider({ children }) {
    return (
        <DatasContextComponent>
            <PagesUrlContextComponent>
                <UrlDatasContextComponent>
                    <SearchInpuValueContextComponent>
                        {children}
                    </SearchInpuValueContextComponent>
                </UrlDatasContextComponent>
            </PagesUrlContextComponent>
        </DatasContextComponent>
    )
}
