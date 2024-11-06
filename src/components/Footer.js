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
            <footer class="text-gray-600 body-font" style={{ backgroundColor: '#f0f0f0' }}>



                <div className="container px-1 py-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" style={{ justifyContent: 'space-between' }} >
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start sm:justify-center text-gray-900">

                            <span className={styles.textFooter}>Singapore’s dedicated online magazine for bags, fashion and life’s little luxuries…</span>
                        </a>
                        <p class="mt-8 text-sm text-black-500">Copyright ©2024 Bagaholicboy PTE LTD
                            All rights reserved</p>
                    </div>

                    <div class="flex md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full px-10">
                            {/* <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav class="list-none mb-10">
                                <li className='mt-2 mb-2'>
                                    <Link href='/view/bags'>
                                        <p class="text-black hover:border-b-2 border-black text-xs">BAGS</p>
                                    </Link>
                                </li>

                                <li className='mt-2 mb-2'>
                                    <Link href='/view/beauty'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">BEAUTY</p>
                                    </Link>
                                </li>

                                <li className='mt-2 mb-2'>

                                    <Link href='/view/Fashion'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">FASHION</p>
                                    </Link>
                                </li>

                                <li className='mt-2 mb-2'>
                                    <Link href='/view/Jewellery'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">JEWELLERY</p>
                                    </Link>
                                </li>

                                <li className='mt-2 mb-2'>
                                    <Link href='/view/Watches'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">
                                            WATCHES</p>
                                    </Link>
                                </li>

                                <li className='mt-2 mb-2'>
                                    <Link href='/view/Lifestyle'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">LIFESTYLE</p>
                                    </Link>
                                </li>

                            </nav>
                        </div>
                        {/* <div class="lg:w-1/2 md:w-1/2 w-full px-10"> */}
                        <div class="w-full px-10">
                            {/* <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav class="list-none mb-10">
                                <li className='mt-2 mb-2'>
                                    <Link href='https://www.instagram.com/bagaholicboy/'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p class="text-black hover:border-b-2 border-black text-xs">INSTAGRAM</p>
                                    </Link>
                                </li>
                                <li className='mt-2 mb-2'>
                                    <Link href='https://www.tiktok.com/about'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p class="text-black hover:border-b-2 border-black  text-xs">TIKTOK</p>
                                    </Link>
                                </li>
                                <li className='mt-2 mb-2'>
                                <Link href='/view/Search'>
                                    <p class="text-black hover:border-b-2 border-black  text-xs">SEARCH</p>
                                    </Link>
                                </li>
                                <br />
                                <li >
                                    <Link href='/view/Allabout'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">ABOUT US</p>
                                    </Link>
                                </li>

                                <li className='mt-2 mb-2'>
                                    <Link href='/view/privacypolicy'>
                                        <p class="text-black hover:border-b-2 border-black  text-xs">PRIVACY POLICY</p>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>




                </div>


                <div style={{ backgroundColor: '#f0f0f0', }}>
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
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