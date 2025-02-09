import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 2,
                },
            }
        ]
    }

    return (
        <Slider {...settings}>
            <div className="testimonials py-4 px-3">
                <p>
                    “EasyTravel made my trip planning so easy! Their attention to detail 
                    and excellent service gave me an unforgettable travel experience. Highly 
                    recommend them!”
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Liam Anderson
                        </h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    “I was blown away by the personalized recommendations and support I received. 
                    It made my solo travel experience smooth and memorable.”
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Olivia Brown</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    “Booking through EasyTravel was the best decision! 
                    Their seamless process and amazing customer service 
                    made my family vacation perfect.”
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Emma Johnson</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    “The curated packages and attention to detail were excellent! 
                    I loved exploring the hidden gems recommended by the team.”
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Emma Wilson</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    “I’ve never felt more confident traveling to a new destination. 
                    The team ensured every detail was covered. Incredible experience!”
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Sophia Brown</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
