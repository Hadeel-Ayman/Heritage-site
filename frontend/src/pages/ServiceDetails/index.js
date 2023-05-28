// import "./style.scss";
// import { Link, useParams } from "react-router-dom";
// import Reviews from "./reviews";
// import visa from '../../assets/images/visa.png'
// import man from '../../assets/images/man.jpg'
// import { useEffect, useState } from "react";
// import { Localhost } from "../../config/api";

// const SingleService = () => {
//     const [data, setData] = useState({})


//     useEffect(() => {
//         const fetchData = () => {
//             fetch(`${Localhost}/service`)
//                 .then((res) => (res.json()))
//                 .then((datafetch) => setData(datafetch))
//         }
//         fetchData()
//     }, [])

//     return (
//         <div className="gig">
//             {/* {isLoading ? (
//                 "loading"
//             ) : error ? (
//                 "Something went wrong!"
//             ) : ( */}
//             <div className="container">
//                 <div className="left">
//                     {/* <h1>{data.title}</h1> */}
//                     <h1>data.title</h1>
//                     {/* {isLoadingUser ? (
//                             "loading"
//                         ) : errorUser ? (
//                             "Something went wrong!"
//                         ) : ( */}
//                     <div className="user">
//                         <img
//                             className="image"
//                             src={data.img || visa}
//                             alt=""
//                         />
//                         <span>data.username</span>
//                         {/* <span>{data.username}</span> */}
//                         {/* {!isNaN(data.totalStars / data.starNumber) && (
//                             <div className="stars">
//                                 {Array(Math.round(data.totalStars / data.starNumber))
//                                     .fill()
//                                     .map((item, i) => (
//                                         <img src="/img/star.png" alt="" key={i} />
//                                     ))}
//                                 <span>{Math.round(data.totalStars / data.starNumber)}</span>
//                             </div>
//                         )} */}
//                     </div>
//                     <img src={man} alt="" className="man" />
//                     {/* )} */}
//                     {/* <Slider slidesToShow={1} arrowsScroll={1} className="slider">
//                         {data.images.map((img) => (
//                         ))}
//                     </Slider> */}
//                     <h2>About This Gig</h2>
//                     <p>data.desc</p>
//                     {/* <p>{data.desc}</p> */}
//                     {/* {isLoadingUser ? (
//                             "loading"
//                         ) : errorUser ? (
//                             "Something went wrong!"
//                         ) : ( */}
//                     <div className="seller">
//                         <h2>About The Seller</h2>
//                         <div className="user">
//                             <img src={"/img/noavatar.jpg"} alt="" />
//                             {/* data.img || */}
//                             <div className="info">
//                                 <span>data.username</span>
//                                 <span>{data.username}</span>
//                                 {/* <span>{data.username}</span> */}
//                                 {/* {!isNaN(data.totalStars / data.starNumber) && (
//                                     <div className="stars">
//                                         {Array(Math.round(data.totalStars / data.starNumber))
//                                             .fill()
//                                             .map((item, i) => (
//                                                 <img src="/img/star.png" alt="" key={i} />
//                                             ))} */}
//                                 {/* <span>
//                                     {Math.round(data.totalStars / data.starNumber)}
//                                 </span> */}
//                             </div>
//                             {/* )} */}
//                             <button>Contact Me</button>
//                         </div>
//                     </div>
//                     <div className="box">
//                         <div className="items">
//                             <div className="item">
//                                 <span className="title">From</span>
//                                 {/* <span className="desc">{data.country}</span> */}
//                                 <span className="desc">data.country</span>
//                             </div>
//                             <div className="item">
//                                 <span className="title">Member since</span>
//                                 <span className="desc">Aug 2022</span>
//                             </div>
//                             <div className="item">
//                                 <span className="title">Avg. response time</span>
//                                 <span className="desc">4 hours</span>
//                             </div>
//                             <div className="item">
//                                 <span className="title">Last delivery</span>
//                                 <span className="desc">1 day</span>
//                             </div>
//                             <div className="item">
//                                 <span className="title">Languages</span>
//                                 <span className="desc">English</span>
//                             </div>
//                         </div>
//                         <hr />
//                         {/* <p>{data.desc}</p> */}
//                         <p>data.desc</p>
//                     </div>
//                 </div>
//                 {/* )} */}
//                 {/* <Reviews gigId={id} /> */}
//             </div>
//             <div className="right">
//                 <div className="price">
//                     <h3>data.shortTitle</h3>
//                     {/* <h3>{data.shortTitle}</h3> */}
//                     <h2>$ data.price</h2>
//                     {/* <h2>$ {data.price}</h2> */}
//                 </div>
//                 <p>ata.shortDesc</p>
//                 {/* <p>{data.shortDesc}</p> */}
//                 <div className="details">
//                     <div className="item">
//                         <img src="/img/clock.png" alt="" />
//                         <span>data.deliveryDate Days Delivery</span>
//                         {/* <span>{data.deliveryDate} Days Delivery</span> */}
//                     </div>
//                     <div className="item">
//                         <img src="/img/recycle.png" alt="" />
//                         {/* <span>{data.revisionNumber} Revisions</span> */}
//                         <span>data.revisionNumber Revisions</span>
//                     </div>
//                 </div>
//                 <div className="features">
//                     {/* {data.features.map((feature) => ( */}
//                     <div className="item" key={'feature'}>
//                         {/* <div className="item" key={feature}> */}
//                         <img src="/img/greencheck.png" alt="" />
//                         <span>featur</span>
//                         {/* <span>{feature}</span> */}
//                     </div>
//                     {/* ))} */}
//                 </div>
//                 {/* <Link to={`/pay/${id}`}>
//                     <button>Continue</button>
//                 </Link> */}
//             </div>
//         </div>
//         // {/* )} */}
//         // </div>
//     );
// }

// export default SingleService;

// import React from 'react';
// import './style.scss';
// import AboutSellerPage from './about seller';
// import FAQPage from './FAQ';
// import ReviewsPage from './Reviews';
// // import ReviewsPage from './reviews';

// const GigPage = () => {
//     // Dummy data for gig
//     const gig = {
//         title: 'Web Development',
//         description: 'I will create a responsive website for your business.',
//         price: 50,
//         deliveryTime: '3 days',
//     };

//     return (
//         <div className='all_Detailes'>
//             <div className="gig-page">
//                 <div className="gig-details">
//                     <h1 className="gig-title">{gig.title}</h1>
//                     <p className="gig-description">{gig.description}</p>
//                     <div className="gig-info">
//                         <span className="gig-price">${gig.price}</span>
//                         <span className="gig-delivery-time">Delivery: {gig.deliveryTime}</span>
//                     </div>
//                 </div>
//             </div>
//             <AboutSellerPage />
//             <FAQPage />
//             <ReviewsPage />
//         </div>
//     );
// };

// export default GigPage;



import React from 'react';
import './style.scss';
import man from '../../assets/images/man.jpg'
import img from '../../assets/images/img.jpg'
import { Stars } from '../../assets/icons';
import AboutThisGig from './About this gig';
import AboutSellerPage from './about seller';
import Feedback from '../SellerProfile/Feedback';
import Feedbacks from './Feedback';

const ServiceDetailsPage = () => {
    // Dummy data for service details
    const service = {
        title: 'Web Development',
        description: 'I will create a responsive website for your business.',
        price: 50,
        img: man,
        service: img,
        stars: Stars,
        seller: {
            name: 'John Doe',
            rating: 4.8,
            reviews: 156,
            location: 'United States',
        },
    };

    return (
        <>
            <div className="service-details-page">
                <div className="service-details">
                    <h1 className="service-description">{service.description}</h1>
                    <div className='sellers'>
                        <img src={service.img} alt='' />
                        <span>{service.seller.name}</span>
                        <span>{`@${service.seller.name} `}</span>
                        <p>{"⭐".repeat(5)}</p>
                    </div>
                    <hr />
                    <div>
                        <img src={service.service} alt='' className='serviceImg' />
                    </div>
                    <AboutThisGig />
                </div>
            </div>
            <AboutSellerPage />
            <Feedbacks />
        </>
    );
};

export default ServiceDetailsPage;
