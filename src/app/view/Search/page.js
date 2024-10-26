"use client";  // Add this line at the very top
import Image from "next/image";
import { useEffect, useState, useLayoutEffect } from 'react';
import Link from 'next/link'


import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import styles from './search.module.css';



export default function Search() {

    const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term, e.g., send a request to an API
    console.log('Search term:', searchTerm);
  };

    return(
        <>
         <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Type your search"
        value={searchTerm}
        onChange={handleChange}
        className="border rounded-md py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Search
      </button>
    </form>
        
        </>
    )

}