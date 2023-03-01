import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [searchInput, setsearchInput] = useState('');
  return (
    <div className="bg bg-red-600 text-white h-24">
      <div className=" flex items-center h-full justify-between pr-10 ">
        <div className=" justify-start py-6 pl-10 animate-bounce gap-10">
          <Link to="/" className="font-extrabold text-3xl">
            Youtube Clone
          </Link>
        </div>
        <div className=" flex gap-0.5  ">
          <input
            type="text"
            placeholder="search anything..."
            className="text-gray-400 py-1.5 pl-2  rounded-md "
            onChange={(e) => {
              setsearchInput(e.target.value);
            }}
          ></input>
          <button
            className="pl-2 pr-2 bg bg-gray-500 rounded-md  "
            onClick={() => props.searchVideo(searchInput)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
