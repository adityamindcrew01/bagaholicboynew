'use client'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link';
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
import styles from './moretoloveDetails.module.css'; // Import custom styles
import SmallChannelLayout from '@/components/SmallChannelLayout';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';
import client from '@/lib/contentful';
import Youmaylike from '../Youmaylike/page';
import moment from 'moment';


export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <MoretoloveDetails />
        </Suspense>
    );
}


const MoretoloveDetails = ({ product }) => {
    const [commonproduct, setcommonProduct] = useState({})

    const searchParams = useSearchParams()
    const id = searchParams.get('id')




    const [youmaylike, setYoumayLike] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            await displayCommonProduct();


        };

        fetchData();
        displayYoumaylike();



    }, []);


    const displayCommonProduct = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/bags-lists/${id}`, {

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

    const displayYoumaylike = async () => {


        try {
            const product = await client.getEntries(
                {
                    'content_type': 'youmaylike',
                }
            )
            console.log("displayBagsList", product.items);
            setYoumayLike(product.items)

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

                <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-screen">
                    <img src={commonproduct?.subimage1?.fields?.file?.url} alt="Product Image" className="lg:w-[50%] sm:w-[100%] md:w-[50%]  rounded-lg" />
                </div>

                {commonproduct?.description?.split('\n').map((paragraph, index) => (
                    <div className='flex justify-center items-center' key={index}>
                        <p className={`${styles.descriptionTitle} text-sm md:text-base lg:text-lg`}>
                            {paragraph.trim()}
                        </p>
                    </div>
                ))}

                {commonproduct?.subimage2?.fields?.file?.url && (
                    <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-screen">
                        <img src={commonproduct?.subimage2?.fields?.file?.url} alt="Product Image" className="lg:w-[50%] sm:w-[100%] md:w-[50%]  rounded-lg " />
                    </div>
                )}

                {commonproduct?.description2?.split('\n').map((paragraph, index) => (
                    <div className='flex justify-center items-center' key={index}>
                        <p className={`${styles.descriptionTitle} text-sm md:text-base lg:text-lg`}>
                            {paragraph.trim()}
                        </p>
                    </div>
                ))}

                <div className='flex justify-center items-center'>
                    <i className={`${styles.UnderlineText} text-sm md:text-base lg:text-lg`}>
                        For more information, do visit OMEGAWATCHES.com
                    </i>
                </div>

                <div className='flex justify-center items-center'>
                    <i className={`${styles.UnderlineText2} text-sm md:text-base lg:text-lg`}>
                        PHOTOS COURTESY OF OMEGA
                    </i>
                </div>

                <div className="flex justify-center w-full mt-10 md:mt-20 mb-5">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-1/2 border-t-2 border-grey border-b-2 pt-2 pb-2">
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

                <div className="flex justify-center w-full mb-20">
                    <div className="flex gap-2">
                        <button className={styles.buttoncontenet}>Fall-Winter 2024</button>
                        <button className={styles.buttoncontenet}>Omega</button>
                        <button className={styles.buttoncontenet}>Watches</button>
                    </div>
                </div>
            </div>


            <SmallChannelLayout />


   

            <Youmaylike/>








            <Footer />
        </div>




    )
}




