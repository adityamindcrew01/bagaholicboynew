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
import styles from './privacy.module.css'; // Import custom styles
import SmallChannelLayout from '@/components/SmallChannelLayout';
import { Base_URL } from '@/app/Config';
import Footer from '@/components/Footer';
import client from '@/lib/contentful';
import Youmaylike from '../Youmaylike/page';


export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <PrivacyPolicy />
        </Suspense>
    );
}


const PrivacyPolicy = ({ product }) => {
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



                <div className='text-center flex justify-center items-center'>
                    <h1 className={`${styles.detailsTitle} text-2xl md:text-4xl lg:text-5xl sm:text-xl pt-10 pb-5`}>Privacy Policy</h1>
                </div>


                <div className='flex justify-center items-center pb-20' >
                    <p className={`${styles.descriptionTitle}  md:text-base lg:text-lg`}>
                        This Privacy Policy (the “Policy”) applies to the collection, use and disclosure of an individual customer’s Personal Data (hereinafter defined) arising from goods and/or services offered by Bagaholicboy (‘BBOY‘).
                        <br />
                        <br />
                        1. General
                        <br />

                        1.1 This Policy statement provides information on the obligations and policies of BBOY in respect of an individual customer’s Personal Data. BBOY undertakes to use reasonable efforts in applying, where practicable, those principles and the processes set out herein to its operations.
                        <br />
                        <br />

                        1.2 BBOY‘s management and members of staff shall use reasonable endeavours to respect the confidentiality of and keep safe any and all Personal Data collected and/or stored and/or disclosed and/or used for, or on behalf of, BBOY. BBOY shall use reasonable endeavours to ensure all collection and/or storage and/or disclosure and/or usage of Personal Data by BBOY shall be done in an appropriate manner and in accordance to the Act and this Policy.
                        <br />
                        <br />
                        2. Contacting the Data Protection Officer
                        <br />
                        2.1 Where you legitimately request access to and/or correction of Personal Data relating to you which is in the possession and control of BBOY, BBOY shall provide and/or correct that data in a reasonable time and manner in accordance with its standard procedures as stated hereinafter.
                        <br />
                        <br />
                        2.2 In accordance with the Act, BBOY has established a process for receiving and responding to any query or complaint that may arise with respect to the application of this Act. To ensure that BBOY receives your complaints and enquiries, please send the same via email to mailbag@bagaholicboy.com.
                        <br />
                        <br />
                        2.3 Should you not wish BBOY to use your Personal Data for any of the purposes listed in Clauses 3.2 to 3.4, or not to receive promotional materials from BBOY, you may opt out by sending a clearly worded email to the email address provided in Clause 2.2. Your request shall be processed within a reasonable time.
                        <br />
                        <br />
                        3. Statement of Practices
                        <br />
                        Types of Personal Data Collected
                        <br />
                        3.1 As part of its day to day activities, BBOY may collect from you, through various means, including via our website, from time to time, the following Personal Data: name (first and surname); postal address; phone number (including mobile); fax number; e-mail address; gender; Personal Data of your emergency contacts; photographs and images. We use cookies on our websites to track website visitor ship and experience. Most web browsers are designed to accept cookies. If you do not wish to receive any cookies, you may set your browser to refuse it.
                        <br />
                        <br />
                        Purpose of Collection of Personal Data
                        3.2 The above Personal Data mentioned in Clause 3.1 is collected for the purposes of processing your application and registration of your membership and to ascertain if you are eligible for discounts, privileges or benefits or other related purposes; to conduct market research and analysis; for direct marketing through voice calls; text messages; email; direct mail and facsimile messages; to notify you of any changes to our policies or services which may affect you; to respond to queries and feedback; for identification and club access; maintaining and updating your membership details; and informing you of new developments, services, promotions of BBOY and other third parties which we are associated with.
                        <br />
                        <br />
                        Disclosure of Personal Data
                        <br />
                        3.3 BBOY will not, in any way, disclose your Personal Data unless they are for regulators and law enforcement officials; lawyers; auditors; third party service providers and consultants; third party investors; credit, debit and charge card companies, banks and other entities processing payment; and any agent or subcontractor acting on BBOY’s behalf for the provision of BBOY’s services.
                        <br />
                        <br />
                        4. Transfer of Personal Data Overseas
                        <br />
                        Your Personal Data may be processed by BBOY in jurisdictions outside of Singapore. In this event BBOY will comply with the terms of the Act.
                        <br />
                        <br />
                        5. Accuracy of Personal Data
                        <br />
                        Where possible, BBOY will validate data provided using generally accepted practices and guidelines. This includes the use of check sum verification on some numeric fields such as account numbers or credit card numbers. In some instances, BBOY is able to validate the data provided against pre-existing data held by BBOY. In some cases, BBOY is required to see original documentation before we may use the Personal Data such as with Personal Identifiers and/or proof of address. To assist in ensuring the accuracy of your Personal Data in the possession of BBOY, please inform us of any updates of any parts of your Personal Data by sending a clearly worded email to the DPO at the email address earlier provided.
                        <br />
                        <br />
                        6. Protection of Personal Data
                        <br />
                        BBOY uses commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and security of your Personal Data and will not knowingly allow access to this data to anyone outside BBOY, other than to you or as described in this Policy. However, BBOY cannot ensure or warrant the security of any information you transmit to BBOY and you do so entirely at your own risk. In particular, BBOY does not warrant that such information may not be accessed, altered, collected, copied, destroyed, disposed of disclosed or modified by breach of any of BBOY’s physical, technical, or managerial safeguards.
                        <br />
                        <br />
                        7. Access & Correction of Personal Data
                        <br />
                        7.1 In accordance with Clause 2.1 of this Policy, you have the right to: a) check whether BBOY holds any Personal Data relating to you and, if so, obtain copies of such data; and b) require BBOY to correct any Personal Data relating to you which is inaccurate for the purpose for which it is being used.
                        <br />
                        <br />
7.2 BBOY reserves the right to charge a reasonable administrative fee in order to meet your requests under Clause
                        <br />
                        <br />
                        7.3. Upon payment of the requisite fee, your request shall be processed within a reasonable time.
                        <br />
                        <br />
                        7.4 If you wish to verify the details you have submitted to BBOY or if you wish to check on the manner in which BBOY uses and processes your Personal Data, BBOY’s security procedures mean that BBOY may request proof of identity before we reveal information. This proof of identity will take the form of full details of name, membership number and NRIC or Passport or FIN number. You must therefore keep this information safe as you will be responsible for any action which BBOY takes in response to a request from someone using your membership details. We would strongly recommend that you do not use the browser’s password memory function as that would permit other people using your terminal to access your personal information.
                        <br />
                        <br />
                        8. Storage & Retention of Personal Data
                        <br />
BBOY will delete, as reasonably possible, or otherwise anonymise any Personal Data in the event that the Personal Data is not required for any reasonable business or legal purposes of BBOY and where the Personal Data is deleted from BBOY‘s electronic, manual, and other filing systems in accordance with BBOY‘s internal procedures and/or other agreements.
                        <br />
                        <br />                 
                        9. Change Policy
                        <br />
BBOY reserves the right to alter any of the clauses contained herein in compliance with local legislation and/or to meet its global policy requirements, and for any other purpose deemed reasonably necessary by BBOY. You should look at these terms regularly. If you do not agree to the modified terms, you should inform us as soon as possible of the terms to which you do not consent. Pending such notice, if there is any inconsistency between these terms and the additional terms, the additional terms will prevail to the extent of the inconsistency.
                        <br />
                        <br />
                        10. Governing Law
                        <br />
This Policy is governed by and shall be construed in accordance with the laws of Singapore. You hereby submit to the non-exclusive jurisdiction of the Singapore courts.
                        <br />
                        <br />    
                        11. Miscellaneous
                        <br />
11.1 This Policy only applies to the collection and use of Personal Data by BBOY. It does not cover third party sites to which we provide links, even if such sites are co-branded with our logo. BBOY does not share your Personal Data with third party websites. BBOY is not responsible for the privacy and conduct practices of these third party websites, so you should read their own privacy policies before disclosure of any Personal Data to these websites.
                        <br />
                        <br />  
                        11.2 BBOY will not sell your personal information to any third party without your permission, but we cannot be responsible or held liable for the actions of third party sites which you may have linked or been directed to BBOY’s website.
                        <br />
                        <br />
                        11.3 BBOY’s websites do not target and are not intended to attract children under the age of 18 years old. BBOY does not knowingly solicit personal information from children under the age of 18 years old or send them requests for personal data.
                        <br />

                        </p>
                    </div>
                
                


            </div>
        
               
           
    
            <Footer />
        </div>  


    )
}





