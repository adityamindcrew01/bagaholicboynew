'use client'
import React from 'react'
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import M from './channel1.jpg';

import client from '@/lib/contentful';

const ChannelLayout = () => {


    // const [data, setData] = useState('')



    const [data , setData] = useState([])

 


    const fetchProducts = async () =>{
      const product =  await client.getEntries(
        { 'content_type': 'channelBigLayout',
        }
      )
    console.log("pdscds", product.items);
    setData(product.items)
    
    }
    
    
    useEffect(() => {

        const fetchData = async () => {

            await displayProfile();


        };

        fetchData();

        fetchProducts();



    }, []);

    const displayProfile = async () => {


        try {

            //   setLoading(true)

            const response = await fetch(`https://beneficial-star-c5c2773b54.strapiapp.com/api/chanelbannerbig?populate=*`, {

            });
            const data = await response.json();
            console.log("published-focus area", data);

            setData(data)
            //   setLoading(false)

        } catch (error) {
            console.error('Error fetching buyer data:', error);
        }

    };


    return (
        <div>
       


            {/* <div className="flex justify-center mt-10 mx-10">
                <img alt="ecommerce" className="lg:w-4/5 w-full lg:h-auto h-60 object-cover object-center rounded"
                    src={data?.data?.image?.url}
                />
            </div> */}


            {data?.map((item) => (
                 <div className="flex justify-center mt-10 mx-10">
                 <img alt="ecommerce" className="lg:w-4/5 w-full lg:h-auto h-60 object-cover object-center rounded"
                    src={item?.fields.image.fields?.file?.url}
                 />
             </div>
            ))}


        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const repo = await res.json();

    return {
        props: { name: 'sdjkncdbjskcjbksjbk' } // Return the prop here
    };
}

export default ChannelLayout;
