
import React from 'react';
import './style.scss';
import man from '../../assets/images/man.jpg'
import img from '../../assets/images/img.jpg'
import { Stars } from '../../assets/icons';
import AboutThisGig from './About this gig';
import AboutSellerPage from './about seller';
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
            location: 'United States'
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
