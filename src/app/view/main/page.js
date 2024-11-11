'use client'
import ChannelLayout from '@/components/ChannelLayout';
import Navbar from '@/components/Navbar';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import styles from './Carousel.module.css'; // Import custom styles
import SmallChannelLayout from '@/components/SmallChannelLayout';
import { Base_URL } from '@/app/Config';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Footer from '@/components/Footer';

import client from '@/lib/contentful';




export default function Main() {

    const swiperRef = useRef(null);


    const [data, setData] = useState('')
    const [products, setProducts] = useState([])
    const [commonproduct, setcommonProduct] = useState([])
    const [bagsList, setbagsList] = useState([])
    const [fashionlist, setFashionlist] = useState([])
    const [Celebrity, setCelebrity] = useState([])
    const [beauties, setBeauties] = useState([])
    const [swipper, setSwipper] = useState([])
    const [moretolovelist, setMoretolovelist] = useState([])



    const fetchProducts = async () => {
        const product = await client.getEntries(
            {
                'content_type': 'swipperImages',
            }
        )
        console.log("pdscds", product.items);
        setSwipper(product.items)

    }

    useEffect(() => {

        const fetchData = async () => {


            await displayLatestNews()
            await displayCommonProduct()
            await displayBagsList()
            await displayFashionList()
            await displayCelebrity()
            await displayBeauties()
            await displayMoreLoveList()


        };

        fetchData();

        fetchProducts();



    }, []);



    const displayLatestNews = async () => {


        const product = await client.getEntries(
            {
                'content_type': 'latestnews',
            }
        )
        console.log("displayLatestNews", product.items);
        setProducts(product.items)



    };


    const displayCommonProduct = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/common-products?populate=*`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setcommonProduct(data)
        //     //   setLoading(false)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }


        const product = await client.getEntries(
            {
                'content_type': 'commonProduct',
            }
        )
        console.log("displayCommonProduct", product.items);
        setcommonProduct(product.items)

    }

    const displayBagsList = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/bags-lists?populate=*`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setbagsList(data)
        //     //   setLoading(false)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }
        const product = await client.getEntries(
            {
                'content_type': 'bagList',
            }
        )
        console.log("displayBagsList", product.items);
        setbagsList(product.items)



    }

    const displayFashionList = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/fashion-lists?populate=*`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setFashionlist(data)
        //     //   setLoading(false)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }

        const product = await client.getEntries(
            {
                'content_type': 'fashionList',
            }
        )
        console.log("displayCommonProduct", product.items);
        setFashionlist(product.items)

    }

    const displayCelebrity = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/celebrities?populate=*`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setCelebrity(data)
        //     //   setLoading(false)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }

        const product = await client.getEntries(
            {
                'content_type': 'celebrity',
            }
        )
        console.log("displayCommonProduct", product.items);
        setCelebrity(product.items)
    }


    const displayBeauties = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/beauties?populate=*`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setBeauties(data)
        //     //   setLoading(false)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }

        const product = await client.getEntries(
            {
                'content_type': 'beauty',
            }
        )
        console.log("displayCommonProduct", product.items);
        setBeauties(product.items)
    }


    const displayMoreLoveList = async () => {
        // try {

        //     //   setLoading(true)

        //     const response = await fetch(`${Base_URL}/api/beauties?populate=*`, {

        //     });
        //     const data = await response.json();
        //     console.log("published-focus area", data);

        //     setBeauties(data)
        //     //   setLoading(false)

        // } catch (error) {
        //     console.error('Error fetching buyer data:', error);
        // }

        const product = await client.getEntries(
            {
                'content_type': 'moretolovelist',
            }
        )
        console.log("displayMoreLoveList", product.items);
        setMoretolovelist(product.items)
    }










    return (
        <>


            <ChannelLayout />
            <Navbar />






            <div className={styles.carouselWrapper}>
                <Swiper
                    modules={[Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Time in milliseconds (3 seconds)
                        disableOnInteraction: false, // Keeps autoplay active after interaction
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >


                    {swipper?.map((item, index) => {

                        return (
                            <>
                                <SwiperSlide>
                                    <Link href={`/view/SwipperImageDetails?id=${item?.sys?.id}`}>
                                        <img
                                            // src={item?.image?.url} 
                                            src={item?.fields.thumbnail?.fields?.file?.url}
                                            alt="Slide 1" className={styles.imageSlider} />


                                        <button className={styles.buttonTags}>{item?.fields?.tag}</button>


                                        <div className='text-center flex justify-center items-center'>
                                            <h1 className={styles.detailsTitle}>{item?.fields?.title}</h1>



                                        </div>
                                    </Link>


                                </SwiperSlide>
                            </>
                        )

                    })}





                </Swiper>
                {/* Navigation buttons below the image */}

                <div className={styles.navButtons}>
                    <button
                        className={styles.prevButton}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className={styles.nextButton}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className={styles.web}>

                <div className={styles.Layout2}>
                    <div className='flex gap-4 items-center'>
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                            <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                            </path>
                        </svg>
                        <h1 className={styles.Layout2text}>Latest news</h1>

                    </div>

                    <div>
                        <Link href={`/view/Allnews`}>
                            <button className={styles.viewallbutton} >View all</button>
                        </Link>
                    </div>




                </div>
            </div>

            <div className={styles.mobile}>
            <div className={styles.Layout2}>
                    <div className='flex gap-4 items-center'>
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                            <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                            </path>
                        </svg>
                        <h1 className={styles.Layout2text}>Latest news</h1>

                    </div>

                    <div>
                        <Link href={`/view/Allnews`}>
                            <button className={styles.viewallbutton} >All</button>
                        </Link>
                    </div>




                </div>
                </div>


            <div className={styles.web}>



                <div className={styles.Layout2Box}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div class="flex flex-wrap">
                                {products?.map((item, index) => {
                                    return (
                                        <>

                                            {/* <div class={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                            <Link href={`/view/latestNewDetails?id=${item?.sys?.id}`}>
                                                <div className={`${styles.imageContainer} px-0 pt-10 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                    <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />
                                                    <div className={styles.hoverOverlay}></div>
                                                    <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout2imageText}>{item?.fields?.title}</h1>


                                                </div>
                                            </Link>
                                        </div> */}

                                            <div className={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                <Link href={`/view/latestNewDetails?id=${item?.sys?.id}`}>
                                                    <div className={`${styles.imageContainer} px-0 pt-10 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                        <div className={styles.imageWrapper}>
                                                            <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />

                                                            {/* Hover Overlay */}
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                        <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout2imageText} title-font sm:text-2xl text-xl font-medium  mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
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

            </div>

            <div className={styles.mobile}>



                <div className={styles.Layout2Box}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div className={styles.mobiletwocolumns}>
                                {products?.map((item, index) => {
                                    return (
                                        <>


                                            <div className={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                <Link href={`/view/latestNewDetails?id=${item?.sys?.id}`}>
                                                    <div className={`${styles.imageContainer} px-0 pt-10 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                        <div className={styles.imageWrapper}>
                                                            <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />


                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                        <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout2imageText} title-font sm:text-2xl text-xl font-medium  mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
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

            </div>





            <SmallChannelLayout />




            <section class="text-gray-600 body-font">
                <div class={`py-2 ${styles.layout4}`}>
                    <div class="flex flex-wrap -m-4 ">
                        {
                            commonproduct?.map((item, index) => {
                                return (
                                    <>
                                        {/* <div class="p-0 lg:w-1/2 md:w-1/1 sm:w-1/1">
                                            <Link href={`/view/DetailsCommonproduct?id=${item?.sys?.id}`}>

                                                <div className={`flex lg:w-3/8 mx-auto pb-4 mb-4 gap-2  ${styles.flexcommpon}`}>
                                                    <div class="sm:mr-5 inline-flex items-center justify-center rounded-lg flex-shrink-0">


                                                     
                                                        <img
                                                          
                                                            className={styles.commonimage}
                                                            src={item?.fields.image.fields?.file?.url}

                                                        />

                                                    </div>


                                                    <div class={`flex-grow sm:text-left  ${styles.layout4box} `}>

                                                        <button className={styles.Layout3Boxbutton}>{item?.fields?.tag}</button>

                                                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout3imageText}>{item?.fields?.title}</h1>



                                                    </div>
                                                </div>
                                            </Link>
                                        </div> */}

                                        <div className={` ${styles.imageWrappers} p-0 lg:w-1/2 md:w-1/1 sm:w-1/1`}>
                                            <Link href={`/view/DetailsCommonproduct?id=${item?.sys?.id}`}>
                                                <div className={`flex lg:w-3/8 mx-auto pb-4 mb-4 gap-2 ${styles.flexcommpon}`}>
                                                    <div className="sm:mr-5 inline-flex items-center justify-center rounded-lg flex-shrink-0">


                                                        <div className={styles.imageWrapper}>
                                                            <img
                                                                className={styles.commonimage}
                                                                src={item?.fields.image.fields?.file?.url}
                                                            />
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                    </div>
                                                    <div className={`flex-grow sm:text-left ${styles.layout4box}`}>
                                                        <button className={styles.Layout3Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout3imageText} title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    </>
                                )
                            })
                        }




                        {/* <div class="p-0 lg:w-1/2">
                            <div class="flex  lg:w-3/8 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div> */}




                    </div>
                </div>
            </section>






            <div className={styles.Layout2}>
                <div className='flex gap-4 items-center mt-1'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>Bags</h1>

                </div>


            </div>


            <div className={styles.web}>


                <div className={styles.Layout2Box}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div class="flex flex-wrap">
                                {bagsList?.slice(0, 4).map((item, index) => {
                                    return (
                                        <>


                                            <div className={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                <Link href={`/view/latestNewDetails?id=${item?.sys?.id}`}>
                                                    <div className={`${styles.imageContainer} px-0 pt-2 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                        <div className={styles.imageWrapper}>
                                                            <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />

                                                            {/* Hover Overlay */}
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                        <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout2imageText} title-font sm:text-2xl text-xl font-medium  mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
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
            </div>

            <div className={styles.mobile}>
                <div className={styles.Layout2Box}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div className={styles.mobiletwocolumns}>
                                {bagsList?.slice(0, 4).map((item, index) => {
                                    return (
                                        <>


                                            <div className={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                <Link href={`/view/latestNewDetails?id=${item?.sys?.id}`}>
                                                    <div className={`${styles.imageContainer} px-0 pt-5 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                        <div className={styles.imageWrapper}>
                                                            <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />

                                                            {/* Hover Overlay */}
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                        <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout2imageText} title-font sm:text-2xl text-xl font-medium  mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
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
            </div>


            <SmallChannelLayout />



            <div className={styles.Layout2}>
                <div className='flex gap-4 items-center mt-10'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>Fashion</h1>

                </div>


            </div>


            <section class="text-gray-600 body-font mt-0 mx-2">
                <div class={` last:py-2 ${styles.layout42}`}>
                    <div class="flex flex-wrap -m-4 ">
                        {
                            fashionlist?.map((item, index) => {
                                return (
                                    <>
                                        {/* <div class="p-0 lg:w-1/2 md:w-1/1 sm:w-1/1">
                                            <Link href={`/view/fashionDetails?id=${item?.sys?.id}`}>
                                                <div className={`flex lg:w-3/8 mx-auto pb-4 mb-4 gap-2  ${styles.flexcommpon}`}>
                                                    <div class="sm:mr-5 inline-flex items-center justify-center rounded-lg flex-shrink-0">


                                                      
                                                       
                                                        <img
                                                            className={styles.commonimage}
                                                            src={item?.fields?.image?.fields?.file?.url}

                                                        />

                                                    </div>


                                                    <div class={`flex-grow sm:text-left  ${styles.layout4box} `}>

                                                        <button className={styles.Layout3Boxbutton}>{item?.fields?.tag}</button>

                                                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout3imageText}>{item?.fields?.title}</h1>



                                                    </div>
                                                </div>
                                            </Link>
                                        </div> */}
                                        <div className={` ${styles.imageWrappers} p-0 lg:w-1/2 md:w-1/1 sm:w-1/1`}>
                                            <Link href={`/view/DetailsCommonproduct?id=${item?.sys?.id}`}>
                                                <div className={`flex lg:w-3/8 mx-auto pb-1 mb-4 gap-2 ${styles.flexcommpon}`}>
                                                    <div className="sm:mr-5 inline-flex items-center justify-center rounded-lg flex-shrink-0">


                                                        <div className={styles.imageWrapper}>
                                                            <img
                                                                className={styles.commonimage}
                                                                src={item?.fields.image.fields?.file?.url}
                                                            />
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                    </div>
                                                    <div className={`flex-grow sm:text-left ${styles.layout4box}`}>
                                                        <button className={styles.Layout3Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout3imageText} title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            })
                        }







                    </div>
                </div>
            </section>




            <div className={styles.Layout2}>
                <div className='flex gap-4 items-center mt-20'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>Celebrities</h1>

                </div>


            </div>

            <div className={styles.web}>

                <div className={styles.Layout2Box}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div class="flex flex-wrap">
                                {Celebrity?.map((item, index) => {
                                    return (
                                        <>

                                            {/* <div class={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                            <Link href={`/view/CelebrityDetails?id=${itrem?.sys?.id}`}>
                                                <div class=" px-0 pt-0 pb-5 rounded-lg overflow-hidden relative h-full">
                                                    <img src={itrem?.fields?.image?.fields?.file?.url} className={styles.imageLayout2} />
                                                    <button className={styles.Layout2Boxbutton}>{itrem?.fields?.tag}</button>
                                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout2imageText}>{itrem?.fields?.title}</h1>


                                                </div>
                                            </Link>
                                        </div> */}

                                            <div className={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                <Link href={`/view/CelebrityDetails?id=${item?.sys?.id}`}>
                                                    <div className={`${styles.imageContainer} px-0 pt-2 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                        <div className={styles.imageWrapper}>
                                                            <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />

                                                            {/* Hover Overlay */}
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                        <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout2imageText} title-font sm:text-2xl text-xl font-medium  mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
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
            </div>

            <div className={styles.mobile}>
                <div className={styles.Layout2Box}>
                    <section class="text-gray-600 body-font mt-3">
                        <div class="">
                            <div className={styles.mobiletwocolumns}>
                                {Celebrity?.map((item, index) => {
                                    return (
                                        <>

                                            {/* <div class={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                            <Link href={`/view/CelebrityDetails?id=${itrem?.sys?.id}`}>
                                                <div class=" px-0 pt-0 pb-5 rounded-lg overflow-hidden relative h-full">
                                                    <img src={itrem?.fields?.image?.fields?.file?.url} className={styles.imageLayout2} />
                                                    <button className={styles.Layout2Boxbutton}>{itrem?.fields?.tag}</button>
                                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout2imageText}>{itrem?.fields?.title}</h1>


                                                </div>
                                            </Link>
                                        </div> */}

                                            <div className={`${styles.layout2con} lg:w-1/4 sm:w-1/2 md:w-1/2 xs:w-1/2`}>
                                                <Link href={`/view/CelebrityDetails?id=${item?.sys?.id}`}>
                                                    <div className={`${styles.imageContainer} px-0 pt-0 pb-0 rounded-lg overflow-hidden relative h-full`}>
                                                        <div className={styles.imageWrapper}>
                                                            <img src={item?.fields.image.fields?.file?.url} className={styles.imageLayout2} />

                                                            {/* Hover Overlay */}
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                        <button className={styles.Layout2Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout2imageText} title-font sm:text-2xl text-xl font-medium  mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
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
            </div>


            <div className={styles.Layout2}>
                <div className='flex gap-4 items-center mt-20'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>Beauty</h1>

                </div>


            </div>


            <section class="text-gray-600 body-font">
                <div class={`py-2 ${styles.layout42}`}>
                    <div class="flex flex-wrap -m-4 ">
                        {
                            beauties?.map((item, index) => {
                                return (
                                    <>
                                        {/* <div class="pt-3 lg:w-1/2 md:w-1/1 sm:w-1/1">
                                            <Link href={`/view/beautyDetails?id=${item?.sys?.id}`}>
                                                <div className={`flex lg:w-3/8 mx-auto pb-4 mb-4 gap-2  ${styles.flexcommpon}`}>
                                                    <div class="sm:mr-5 inline-flex items-center justify-center rounded-lg flex-shrink-0">


                                                      
                                                        <img
                                                            className={styles.commonimage}
                                                            src={item?.fields?.image?.fields?.file?.url}

                                                        />

                                                    </div>


                                                    <div class={`flex-grow sm:text-left  ${styles.layout4box} `}>

                                                        <button className={styles.Layout3Boxbutton}>{item?.fields?.tag}</button>

                                                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2" className={styles.Layout3imageText}>{item?.fields?.title}</h1>



                                                    </div>
                                                </div>
                                            </Link>
                                        </div> */}

                                        <div className={` ${styles.imageWrappers} pt-2 lg:w-1/2 md:w-1/1 sm:w-1/1`}>
                                            <Link href={`/view/DetailsCommonproduct?id=${item?.sys?.id}`}>
                                                <div className={`flex lg:w-3/8 mx-auto pb-4 mb-4 gap-2 ${styles.flexcommpon}`}>
                                                    <div className="sm:mr-5 inline-flex items-center justify-center rounded-lg flex-shrink-0">


                                                        <div className={styles.imageWrapper}>
                                                            <img
                                                                className={styles.commonimage}
                                                                src={item?.fields.image.fields?.file?.url}
                                                            />
                                                            <div className={styles.hoverOverlay}></div>
                                                        </div>

                                                    </div>
                                                    <div className={`flex-grow sm:text-left ${styles.layout4box}`}>
                                                        <button className={styles.Layout3Boxbutton}>{item?.fields?.tag}</button>
                                                        <h1 className={`${styles.Layout3imageText} title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2`}>
                                                            {item?.fields?.title}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            })
                        }














                    </div>
                </div>
            </section>










            <SmallChannelLayout />




            <div className={styles.Layout2}>
                <div className='flex gap-4 items-center mt-10'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        <path d="M44.8342 18.3319L17.3649 45.7969L18.9765 47.4082L46.4457 19.9432L44.8342 18.3319Z" fill="black"></path><path d="M49.5072 8.16016C56.0951 13.6526 60.2879 21.9181 60.2879 31.1649C60.2879 47.7016 46.8802 61.1073 30.3409 61.1073C24.72 61.1073 19.463 59.5562 14.9686 56.8629C20.1618 61.1943 26.8425 63.802 34.135 63.802C50.6743 63.802 64.0835 50.3964 64.0835 33.8597C64.0835 22.9429 58.2379 13.3931 49.5072 8.16161V8.16016Z" fill="black"></path><path d="M4.18646 33.8559C4.18646 17.3192 17.5942 3.91351 34.135 3.91351C39.7559 3.91351 45.0128 5.46455 49.5072 8.15786C44.3126 3.82653 37.6319 1.21875 30.3394 1.21875C13.8001 1.21875 0.392334 14.6244 0.392334 31.1611C0.392334 42.0779 6.23793 51.6277 14.9686 56.8592C8.38073 51.3668 4.18646 43.1013 4.18646 33.8545V33.8559Z" fill="black">
                        </path>
                    </svg>
                    <h1 className={styles.Layout2text}>More to love</h1>

                </div>


            </div>

            <div className={styles.web}>

                <div className={` ${styles.Layout2Box} pb-10 pt-2`}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div class="flex flex-wrap">
                                {moretolovelist?.map((itrem, index) => {
                                    return (
                                        <>

                                            <div class={`${styles.layout2con} lg:w-1/6 sm:w-1/2 md:w-1/4 xs:w-1/2 `}>
                                                <Link href={`/view/moretolove?id=${itrem?.fields?.brand}`}>
                                                    <div class=" px-0 pt-0 pb-5 rounded-lg overflow-hidden relative h-full">
                                                        <img src={itrem?.fields?.image?.fields?.file?.url} className={styles.imageLayout2} />


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
            </div>

            <div className={styles.mobile}>
                <div className={` ${styles.Layout2Box} pb-10 pt-2`}>
                    <section class="text-gray-600 body-font">
                        <div class="">
                            <div className={styles.mobiletwocolumns}>
                                {moretolovelist?.map((itrem, index) => {
                                    return (
                                        <>

                                            <div class={`${styles.layout2con} lg:w-1/6 sm:w-1/2 md:w-1/4 xs:w-1/2 `}>
                                                <Link href={`/view/moretolove?id=${itrem?.fields?.brand}`}>
                                                    <div class=" px-0 pt-0 pb-5 rounded-lg overflow-hidden relative h-full">
                                                        <img src={itrem?.fields?.image?.fields?.file?.url} className={styles.imageLayout2} />


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
            </div>




            <Footer />








        </>
    );
}
