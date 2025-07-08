'use client'
import React from "react";
import Slider from "react-slick";

import Image from "next/image";
import businessImage1 from "../../asserts/business/image1.jpg"
import businessImage2 from "../../asserts/business/image2.jpg"
import businessImage3 from "../../asserts/business/image3.jpg"
import businessImage4 from "../../asserts/business/image4.jpg"
import businessImage5 from "../../asserts/business/image5.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const teamMembers = [
    { id: 1, name: "Satyam Mishra", role: "Manager", imageUrl: businessImage1 },

    {
        id: 3,
        name: "Upasana Aasati",
        role: "Team Leader",
        imageUrl: businessImage4,
    },
    { id: 2, name: "Dinesh Kumar", role: "Designer", imageUrl: businessImage2 },

    {
        id: 7,
        name: "Ashutosh Pathak",
        role: "Designer",
        imageUrl: businessImage3,
    },
    {
        id: 9,
        name: "Shivam Mishra",
        role: "Designer",
        imageUrl: businessImage5,
    },
];

const Business: () => void = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,

        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <div className="">

            <div className="max-w-[98vw] w-[98vw] md:max-w-[95vw] p-4 max-h-[90vh] box-border bg-rose-200 ">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className=" flex justify-center items-center">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center flex justify-center flex-col items-center">
                                <Image
                                    src={member?.imageUrl}
                                    alt={member.name}
                                    height={100}
                                    width={100}
                                    className=" p-2 object-cover  min-w-[60vw] min-h-[5vh] "
                                />
                                <div className="p-6">
                                    <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                                    <p className="text-gray-600 ">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Business