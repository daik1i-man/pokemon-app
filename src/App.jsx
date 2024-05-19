import React, { useContext } from 'react'
import Img from '../public/Pokemon.svg';
import PagesLayout from './PagesLayout/PagesLayout';
import { Button, Pagination } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { SearchInputValueContext } from './Provider/searchInputValueContext/searchInpuValueContext';

export default function App() {
  const { inputValue, FilteredDatas } = useContext(SearchInputValueContext);
  let navigate = useNavigate();

  const PrevClickHandler = () => {
    navigate('/');
  }

  const NextClickHandler = () => {
    navigate('/next');
  }

  return (
    <>
      {/* Main View  */}
      <div className="w-full justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <div className="w-full justify-center text-center">
            <img className='mx-auto my-16' src={Img} alt="" />
          </div>
          <div className="">
            <input
              value={inputValue}
              type="search"
              name="price"
              id="price"
              onChange={(e) => FilteredDatas(e)}
              className="block w-7/12 rounded-md border-0 py-2 mx-auto pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Search..."
            />
          </div>

          {/* Pages Routing */}

          <PagesLayout />

          {/* Pages regular buttons */}

          <div className="flex items-center justify-end space-x-4">
            <Button className='px-5 my-3' onClick={PrevClickHandler}>Previus</Button>
            <Button className='px-5 my-3' onClick={NextClickHandler}>Next</Button>
          </div>
        </div>
      </div>
    </>
  )
}

