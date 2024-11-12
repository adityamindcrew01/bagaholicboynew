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
import styles from './youmay.module.css'; // Import custom styles
import SmallChannelLayout from '@/components/SmallChannelLayout';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';
import client from '@/lib/contentful';
import moment from 'moment/moment';
import Youmaylike from '../Youmaylike/page';


export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <YoumaylikeDetails />
        </Suspense>
    );
}


const YoumaylikeDetails = ({ product }) => {
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
                    <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-screen">
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

<div className='flex justify-center items-center mt-10'>
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
            <br/>


            {/* <div className={styles.Layout2}>
                <div className='flex gap-4 items-center'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>You may like</h1>

                </div>



            </div>


            <div className={styles.Layout2Box}>
                <section class="text-gray-600 body-font">
                    <div class="">
                        <div class="flex flex-wrap">
                            {youmaylike?.map((item, index) => {
                                return (
                                    <>

                                        <div class={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                            <Link href={`/view/youmaylikeDetails?id=${item?.sys?.id}`}>
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
            </div> */}





            <Footer />
        </div>




    )
}



