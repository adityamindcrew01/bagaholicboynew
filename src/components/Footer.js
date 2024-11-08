'use client'
import { useRouter, useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import styles from './footer.module.css';

import { Base_URL } from '@/app/Config';

import ima from '../app/asset/image/brand.png'

import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font" style={{ backgroundColor: '#f0f0f0' }}>



                <div className={` ${styles.fotterContainer}   py-7 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col`} style={{ justifyContent: 'space-between' }} >
                    <div className="w-64 flex-shrink-0 ">

                        <h6 className={` ${styles.textFooter} flex title-font `}>

                    Singapore’s dedicated online magazine for bags, fashion and life’s little luxuries…
                        </h6>

                        <p className={`${styles.textSub} mt-8  ml-1 text-black-500`} >Copyright ©2024 Bagaholicboy PTE LTD
                            All rights reserved</p>
                    </div>

                    <div className="flex  -mb-10 md:mt-0 mt-10 md:text-left ml-2">

                        <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full mr-20">
                            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav className="list-none mb-10">
                                <li className=''>
                                    <Link href='/view/bags'>
                                        <p className={` ${styles.menu} text-black hover:border-b-2 border-black text-xs`}>BAGS</p>
                                    </Link>
                                </li>

                                <li className=''>
                                    <Link href='/view/beauty'>
                                        <p className={` ${styles.menu} text-black hover:border-b-2 border-black text-xs`}>BEAUTY</p>
                                    </Link>
                                </li>

                                <li className=''>

                                    <Link href='/view/Fashion'>
                                        <p className={` ${styles.menu} text-black hover:border-b-2 border-black text-xs`}>FASHION</p>
                                    </Link>
                                </li>

                                <li className=''>
                                    <Link href='/view/Jewellery'>
                                        <p className={` ${styles.menu} text-black hover:border-b-2 border-black text-xs`}>JEWELLERY</p>
                                    </Link>
                                </li>

                                <li className=''>
                                    <Link href='/view/Watches'>
                                        <p className={` ${styles.menu} text-black hover:border-b-2 border-black text-xs`}>
                                            WATCHES</p>
                                    </Link>
                                </li>

                                <li className=''>
                                    <Link href='/view/Lifestyle'>
                                        <p className={` ${styles.menu} text-black hover:border-b-2 border-black text-xs`}>LIFESTYLE</p>
                                    </Link>
                                </li>

                            </nav>
                        </div>
                       
                        <div className="w-full lg:pr-20">
                           
                            <nav className="list-none mb-10">
                                <li className=' '>
                                    <Link href='https://www.instagram.com/bagaholicboy/'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className={` ${styles.menu} text-black  border-black text-xs`}>INSTAGRAM</p>
                                    </Link>
                                </li>
                                <li className=' '>
                                    <Link href='https://www.tiktok.com/about'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className={` ${styles.menu} text-black  border-black text-xs`}>TIKTOK</p>
                                    </Link>
                                </li>
                                <li className=' '>
                                    <Link href='/view/Search'>
                                        <p className={` ${styles.menu} text-black  border-black text-xs`}>SEARCH</p>
                                    </Link>
                                </li>
                                <br />
                                <li >
                                    <Link href='/view/Allabout'>
                                        <p className={` ${styles.menu} text-black  border-black text-xs`}>ABOUT US</p>
                                    </Link>
                                </li>

                                <li className=' '>
                                    <Link href='/view/privacypolicy'>
                                        <p className={` ${styles.menu} text-black  border-black text-xs`}>PRIVACY POLICY</p>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>




                </div>


                <div style={{ backgroundColor: '#f0f0f0', }}>
                    <div className=" mx-8 py-4  flex flex-wrap flex-col sm:flex-row">
                        <Image
                            src={ima} // Use the imported image
                            alt="Description of image"
                        // width={500}
                        // height={300}
                        />




                    </div>
                </div>


            </footer>
        </div>
    )
}
export default Footer