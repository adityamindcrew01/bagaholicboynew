"use client";  // Add this line at the very top
import Image from "next/image";
import { useEffect, useState, useLayoutEffect } from 'react';
import Link from 'next/link'


import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import styles from './search.module.css';
import ima from '../../../app/asset/image/brand.png'

import client from '@/lib/contentful';
import Footer from "@/components/Footer";



export default function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([])
    const [brandName, setBrandName] = useState([])


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleMenu = () => {
        setIsOpen2(false)
        setIsOpen(!isOpen);
    };
    const toggleMenu2 = () => {
        setIsOpen(false)
        setIsOpen2(!isOpen2);
    };

    const handleChange = async (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value) {



            try {
                // Fetch entries from Contentful based on the query
                const entries = await client.getEntries({
                    'content_type': 'searchBrand', // Replace with your actual content type ID
                    'query': event.target.value, // This searches all text fields by default
                });

                // // Send the entries in response
                // res.status(200).json(entries.items);
                console.log("sdcdsmmm", entries)
                setProducts(entries.items)

            } catch (error) {
                console.error("Error fetching data from Contentful:", error);
                res.status(500).json({ message: 'Error fetching data from Contentful' });
            }
        }
    };




    console.log("majdjd", products)


    useEffect(() => {

        const fetchData = async () => {


            await displayBrandName()


        };

        fetchData();



    }, []);


    const displayBrandName = async () => {


        try {
            const product = await client.getEntries(
                {
                    'content_type': 'brandlist',
                }
            )
            console.log("displayBagsList", product.items);
            setBrandName(product.items)

        } catch (error) {
            console.error('Error fetching product details:', error);
        }

    };

    const handleSubmit = async (name) => {
        console.log(":sdcdsc", name)
        setSearchTerm(name)

        if (name) {



            try {
                // Fetch entries from Contentful based on the query
                const entries = await client.getEntries({
                    'content_type': 'searchBrand', // Replace with your actual content type ID
                    'query': name, // This searches all text fields by default
                });

                // // Send the entries in response
                // res.status(200).json(entries.items);
                console.log("sdcdsmmm", entries)
                setProducts(entries.items)

            } catch (error) {
                console.error("Error fetching data from Contentful:", error);
                res.status(500).json({ message: 'Error fetching data from Contentful' });
            }
        }
    }


    const [isClient, setIsClient] = useState(false);
    const [scrolle, setSrcoll] = useState(false)
    useLayoutEffect(() => {
        setIsClient(true); // Ensure hydration is completed

        const navbar = document.querySelector('header');
        const brandImage = document.querySelector('.brand-image');

        const handleScroll = () => {
            if (window.scrollY > 200) {
                // navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'transition-all', 'duration-300', 'ease-in-out');
                // brandImage.classList.add('w-[10px]');
                //brandImage.classList.add(styles.shrink); // Add shrink class

                setSrcoll(true)
            } else {
                // navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'transition-all', 'duration-300', 'ease-in-out');
                // brandImage.classList.remove('w-[10px]');
                //brandImage.classList.add(styles.brandImage); // Add shrink class
                setSrcoll(false)
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty de



    console.log(":sdcdsc", searchTerm)

    return (
        <>

            <header className="bg-white sticky top-0 z-10 transition-all duration-3">
                <div className=" flex flex-wrap px-5 flex-row items-center justify-between">


                    {/* Hamburger Icon for smaller screens */}
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center md:hidden text-gray-900 focus:outline-none"
                    >
                        {isOpen ? (

                            <RxCross2 className="w-6 h-6" />
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}

                    </button>

                    {/* Menu Links (Desktop and Tablet) */}
                    <nav className="hidden md:flex flex-wrap items-center text-base justify-center space-x-3 text-xs">
                        <Link href='/view/bags'>
                            <p className={`${styles.navmenu} text-black`}>BAGS</p>

                        </Link>
                        <Link href='/view/beauty'>
                            <p className={`${styles.navmenu} text-black`} >BEAUTY</p>

                        </Link>
                        <Link href='/view/Fashion'>
                            <p className={`${styles.navmenu} text-black`}>FASHION</p>
                        </Link>
                        <Link href='/view/Jewellery'>
                            <p className={`${styles.navmenu} text-black`}>JEWELLERY</p>
                        </Link>
                        <Link href='/view/Watches'>
                            <p className={`${styles.navmenu} text-black`}>WATCHES</p>
                        </Link>
                        <Link href='/view/Lifestyle'>
                            <p className={`${styles.navmenu} text-black`}>LIFESTYLE</p>
                        </Link>
                    </nav>

                    {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-center">
                       
                        <div className={` mx-auto py-4 lg:pr-20 md:pr-0 sm:pr-0 flex flex-wrap flex-col sm:flex-row items-center  `}>
                            <Link href='/'>
                                <Image
                                    src={ima}
                                    alt="Description of image"
                                    className={`${styles.imageBrandName} w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-auto`}
                                />
                            </Link>
                        </div>

                    </a> */}

                    {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-center"> */}
                    <div className="mx-auto py-4 lg:pr-20 md:pr-0 sm:pr-0 flex flex-wrap flex-col sm:flex-row items-center">
                        <Link href='/'>
                            {/* <Image
                                    src={ima}
                                    alt="Description of image"
                                    className="brand-image w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px]  xl:max-w-[300px] h-auto transition-all duration-300 ease-in-out"
                                /> */}
                            <Image
                                src={ima}
                                alt="Description of image"
                                className={` brand-image ${scrolle ? styles.shrink : styles.brandImage} h-auto transition-all duration-300 ease-in-out`}
                            />
                        </Link>
                    </div>
                    {/* </a> */}




                    {/* Right side Links (Desktop and Tablet) */}
                    <nav className="hidden md:flex flex-wrap items-center text-base justify-center space-x-3 text-xs">
                        <Link href='https://www.instagram.com/bagaholicboy/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className={`${styles.navmenu} text-black`}>INSTAGRAM</p>
                        </Link>
                        <Link href='https://www.tiktok.com/about'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className={`${styles.navmenu} text-black`}>TIKTOK</p>
                        </Link>
                        <Link href='/view/Search'>
                            <p className={`${styles.navmenu} text-black`}>SEARCH</p>
                        </Link>
                    </nav>

                    {/* 
                    <button
                        onClick={toggleMenu2}
                        className="inline-flex items-center md:hidden text-gray-900 focus:outline-none"
                    > */}
                    <Link href='/view/Search' className="inline-flex items-center md:hidden text-gray-900 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m0 0a7 7 0 111.415-1.414L21 21z"
                            ></path>
                        </svg>
                    </Link>
                    {/* </button> */}

                    {/* Dropdown menu for mobile */}
                    {isOpen && (
                        <div className="flex flex-col w-full mt-0 pb-3 md:hidden space-y-2 text-center shadow-lg">

                            <Link href='/view/bags'>
                                <p className="hover:border-b-2 border-black text-black">BAGS</p>

                            </Link>
                            <Link href='/view/beauty'>
                                <p className="hover:border-b-2 border-black text-black">BEAUTY</p>

                            </Link>
                            <Link href='/view/Fashion'>
                                <p className="hover:border-b-2 border-black text-black">FASHION</p>
                            </Link>
                            <Link href='/view/Jewellery'>
                                <p className="hover:border-b-2 border-black text-black">JEWELLERY</p>
                            </Link>
                            <Link href='/view/Watches'>
                                <p className="hover:border-b-2 border-black text-black">WATCHES</p>
                            </Link>
                            <Link href='/view/Lifestyle'>
                                <p className="hover:border-b-2 border-black text-black">LIFESTYLE</p>
                            </Link>

                            <Link href='https://www.instagram.com/bagaholicboy/'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="hover:text-gray-900 text-gray-900">INSTAGRAM</p>
                            </Link>
                            <Link href='https://www.tiktok.com/about'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="hover:text-gray-900 text-gray-900">TIKTOK</p>
                            </Link>


                        </div>
                    )}


                    {/* Dropdown menu for mobile */}
                    {isOpen2 && (
                        <div className="flex flex-col w-full mt-4 md:hidden space-y-2 text-center">
                            <Link href='/view/Search'>
                                <p className="hover:text-gray-900 " >SEARCH</p>
                            </Link>
                        </div>
                    )}
                </div>
            </header>
            <div className="flex items-center justify-center  px-4 mx-5 border-b-2 " style={{ height: '28em' }}>

                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Type your search"
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {searchTerm == '' ? (
                <div className="text-center mt-5">
                    <p className={styles.SearchText}> Search by brands</p>
                    {/* <div className="flex justify-center">
                        {brandName?.map((item, index) => {
                            return (

                                // <p className={`border-2 border-black px-2 py-2 mx-3 mt-5`} onClick={() =>handleSubmit(item?.fields?.brandName)}> {item?.fields?.brandName}</p>
                                <div className='text-center mx-1 my-5'>
                                    <button className={styles.buttonDetailsText} 
                                    onClick={() =>handleSubmit(item?.fields?.brandName)}
                                    >{item?.fields?.brandName}</button>
                                </div>
                            )
                        })}
                    </div> */}
                    <div className="flex flex-col items-center mt-5 mb-10 mx-10">

                        <div className="flex flex-wrap justify-center gap-2 w-[100%]">
                            {brandName.map((item, index) => (
                                <span
                                    key={index}
                                    className={`${styles.barndlisttext} px-3 py-1 border rounded-full text-sm text-gray-700 hover:bg-black transition hover:text-white`}
                                    onClick={() => handleSubmit(item?.fields?.brandName)}
                                >
                                    {item?.fields?.brandName}
                                </span>


                            ))}
                        </div>
                    </div>


                </div>
            ) : (
                products.length > 0 ? (
                    <div className={styles.Layout2Box}>
                        <section class="text-gray-600 body-font">
                            <div class="">
                                <div class="flex flex-wrap">
                                    {products?.map((item, index) => {
                                        return (
                                            <>

                                                <div class={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                    <Link href={`/view/BagsDetails?id=${item?.sys?.id}`}>
                                                        <div class=" px-0 pt-10 pb-0 rounded-lg overflow-hidden relative h-full">
                                                            <img src={item?.fields?.image?.fields?.file?.url} className={styles.imageLayout2} />
                                                            <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout2imageText}>{item?.fields?.title}</h1>


                                                        </div>
                                                    </Link>
                                                </div>

                                            </>
                                        )
                                    })}



                                </div>
                            </div>
                        </section>
                    </div>
                ) : (

                    <div className="text-center mt-5 mb-[90px]">
                        <p className={styles.SearchText}> No results, try a different search.</p>

                    </div>
                )
            )}
















            <Footer />







        </>
    )

}