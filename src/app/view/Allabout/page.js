'use client'
import { useRouter, useParams } from 'next/navigation'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';
import ChannelLayout from '@/components/ChannelLayout';
import Navbar from '@/components/Navbar';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import styles from './about.module.css'; // Import custom styles
import SmallChannelLayout from '@/components/SmallChannelLayout';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';
import client from '@/lib/contentful';
import Youmaylike from '../Youmaylike/page';


export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Allabout />
        </Suspense>
    );
}


const Allabout = ({ product }) => {
    const [commonproduct, setcommonProduct] = useState({})

    const searchParams = useSearchParams()
    const id = searchParams.get('id')






    useEffect(() => {

        const fetchData = async () => {

            await displayCommonProduct();


        };

        fetchData();



    }, []);


    const displayCommonProduct = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/lifestyles/${id}`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setcommonProduct(data)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }

        try {
            // Fetch product by sys.id using getEntry
            const product = await client.getEntry(id);

            console.log("jsjas", product.fields)
            setcommonProduct(product.fields)

        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }



    return (



        <div style={{ overflowX: 'hidden' }}>

            <Navbar />


            <div className='mx-4 '>



                <div className='text-center flex justify-center items-center mt-5'>
                    <h1 className={`${styles.detailsTitle} text-2xl md:text-4xl lg:text-5xl sm:text-xl`}>Singapore’s dedicated online magazine for bags, fashion and life's little luxuries...</h1>
                </div>


                <div className='flex justify-center items-center' >
                    <p className={`${styles.descriptionTitle}  md:text-base lg:text-lg`}>
                        Bagaholicboy chronicles our never-ending quest to seek out the best designer bags, and today is among the most visited source of inspiration for bags, beauty, fashion, lifestyle and all of lifes little luxuries.
                        <br />
                        <br />
                        Besides educating readers on whats available in the retail mainstream, Bagaholicboy takes pride in introducing Singapores shoppers to lesser-known goods of desire  running the gamut from English schoolboy satchels to Parisian heritage trunk-makers.
                        <br />
                        <br />
                        With a growing readership that extends beyond Singapore and the Asia-Pacific region, Bagaholicboy offers a variety of digital advertising and promotion services to help increase visibility, market reach and brand recognition.
                        <br />
                        <br />
                        Bagaholicboy believes in producing creative content that resonates with our partners and their brand objectives to maximise value in targeting the desired audience directly.
                        <br />
                        <br />
                        The Bagaholicboy network also offers collaborative options, each of which can stand alone or be customised as part of a package to best suit your campaign needs. Get in touch with us.
                        <br />
                        <br />


                        </p>
                    </div>


                        <div className={styles.bottomCurve}>
                            <div className={` ${styles.allaboutFlex}  px-8 py-8 border  rounded-full  bg-white`}>
                                <p className={`${styles.textBottom} font-semibold text-gray-800`}>
                                    Advertising / General Enquiries
                                </p>
                                <p className={`${styles.textBottom} text-gray-800`}>
                                    contact@bagaholicboy.com
                                </p>
                            </div>
                        </div>


                    
                


            </div>
        
            
   

 <Footer />
    </div>  


    )
}





