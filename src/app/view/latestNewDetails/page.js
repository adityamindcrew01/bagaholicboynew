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
import styles from './latest.module.css'; // Import custom styles
import SmallChannelLayout from '@/components/SmallChannelLayout';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';
import client from '@/lib/contentful';
import moment from 'moment';
import Youmaylike from '../Youmaylike/page';


export default function Page() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <LatestNewsDetails />
      </Suspense>
    );
  }


const LatestNewsDetails = ({ product }) => {
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

        //     const response = await fetch(`${Base_URL}/api/products/${id}`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setcommonProduct(data)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }

        try {
            
            const product = await client.getEntry(id);
      
            console.log("displayCommonProduct", product.fields)
            setcommonProduct(product.fields)
           
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
    }



    return (

       
       

        <div style={{ overflowX: 'hidden' }}>
            <ChannelLayout />
            <Navbar />
          

            <div className='mx-4 md:mx-10 mt-10 md:mt-20'>

                <div className='text-center'>
                    <button className={styles.buttonDetailsText}>{commonproduct?.tag}</button>
                </div>

                <div className='text-center flex justify-center items-center'>
                    <h1 className={`${styles.detailsTitle} text-2xl md:text-4xl lg:text-5xl sm:text-xl`}>{commonproduct?.title}</h1>
                </div>



                <div className='text-center flex justify-center items-center'>
                    <p className={`${styles.dateDetails} text-sm md:text-base lg:text-lg`}>{moment(commonproduct?.date).format('DD MMMM YYYY')}</p>
                </div>

                <div className="flex justify-center items-center min-h-[200px] sm:min-h-[400px] md:min-h-screen">
                    <img src={commonproduct?.image?.fields?.file?.url} alt="Product Image" className="lg:w-[50%] sm:w-[100%] md:w-[50%]  rounded-lg" />
                </div>
                <div className='text-center '>
                    <p className={`${styles.imageDetails} `}>{commonproduct?.image?.fields?.title}</p>
                </div>

                {commonproduct?.description?.split('\n').map((paragraph, index) => (
                    <div className='flex justify-center items-center' key={index}>
                        <p className={`${styles.descriptionTitle} text-sm md:text-base lg:text-lg`}>
                            {paragraph.trim()}
                        </p>
                    </div>
                ))}

                {commonproduct?.image2?.fields?.file?.url && (
                    <div className={`${styles.image2Img} flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-screen`}>
                        <img src={commonproduct?.image2?.fields?.file?.url} alt="Product Image" className="lg:w-[50%] sm:w-[100%] md:w-[50%]  rounded-lg " />
                    </div>
                )}

                <div className='text-center '>
                    <p className={`${styles.imageDetails} `}>{commonproduct?.image2?.fields?.title}</p>
                </div>

                {commonproduct?.description2?.split('\n').map((paragraph, index) => (
                    <div className='flex justify-center items-center' key={index}>
                        <p className={`${styles.descriptionTitle} text-sm md:text-base lg:text-lg`}>
                            {paragraph.trim()}
                        </p>
                    </div>
                ))}
                <br />

                <div className='flex justify-center items-center'>
                    <p className={`${styles.UnderlineText} text-sm md:text-base lg:text-lg`}>
                        For more information, do visit <span> CHANEL.com</span>
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <p className={`${styles.UnderlineText2} text-sm md:text-base lg:text-lg`}>
                        PHOTOS COURTESY OF OMEGA
                    </p>
                </div>

                <div className="flex justify-center w-full mt-10 md:mt-20 mb-5">
                    <div className="flex  md:flex-row justify-between items-center w-full md:w-1/2 border-t-2 border-grey border-b-2 pt-2 pb-2">
                        <p className={`${styles.shareText} text-sm md:text-base lg:text-lg text-black `}>Share</p>
                        <div className='flex gap-2'>
                            <button className={styles.buttonicon}>
                                <FaFacebookF className={styles.icon} />
                            </button>
                            <button className={styles.buttonicon}>
                                <FaInstagram className={styles.icon} />
                            </button>
                            <button className={styles.buttonicon}>
                                <FaTiktok className={styles.icon} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex lg:justify-center sm:justify-start w-full mb-20">
                    <div className="flex gap-2">
                        <button className={styles.buttoncontenet}>Fall-Winter 2024</button>
                        <button className={styles.buttoncontenet}>Omega</button>
                        <button className={styles.buttoncontenet}>Watches</button>
                    </div>
                </div>
            </div>
          

            <SmallChannelLayout />

            <Youmaylike/>

            <SmallChannelLayout />
            
            <Footer />
        </div>
      
      


    )
}





