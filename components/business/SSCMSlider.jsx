import React from "react";
import Slider from "react-slick";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import upasanaImage from "../../asserts/upasana_aasati.jpg";
import shreyash_mishra from "../../asserts/shreyash_mishra.jpg";
import satyamImage from "../../asserts/satyampic.png";
import dineshImage from "../../asserts/dinesh_pic.jpg";
import aparna_sharma from "../../asserts/aparna_sharma.jpg";
import ashutosh_pathak from "../../asserts/ashutosh_pathak.jpg";
import himanshu_pathak from "../../asserts/himanshu_pathak.jpg";
import manash_shukla from "../../asserts/manash_shukla.jpg";
import shivam_mishra from "../../asserts/shivam_mishra.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const teamMembers = [
    { id: 1, name: "Satyam Mishra", role: "Manager", imageUrl: satyamImage },

    {
        id: 3,
        name: "Upasana Aasati",
        role: "Team Leader",
        imageUrl: upasanaImage,
    },
    { id: 2, name: "Dinesh Kumar", role: "Designer", imageUrl: dineshImage },

    {
        id: 7,
        name: "Ashutosh Pathak",
        role: "Designer",
        imageUrl: ashutosh_pathak,
    },
    {
        id: 9,
        name: "Shivam Mishra",
        role: "Designer",
        imageUrl: shivam_mishra,
    },
    {
        id: 5,
        name: "Aparna Sharma",
        role: "Designer",
        imageUrl: aparna_sharma,
    },
    {
        id: 8,
        name: "Manash Shukla",
        role: "Designer",
        imageUrl: manash_shukla,
    },
    {
        id: 4,
        name: "Shreyash Mishra",
        role: "Manager",
        imageUrl: shreyash_mishra,
    },
    {
        id: 6,
        name: "Himanshu Pathak",
        role: "Designer",
        imageUrl: himanshu_pathak,
    },
];

function Responsive() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,

        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 4,
                    initialSlide: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    initialSlide: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
        <div className="py-12 max-w-screen-xl">
            <h2 className="text-center text-3xl font-bold mb-8">Our Team</h2>
            <h3 className="text-center text-xl font-semibold text-gray-600 mb-12">
                The Best Team
            </h3>
            <div className="max-w-[80vw] w-[80vw] md:max-w-[95vw] p-4 min-h-[30vh] box-border ">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="px-4 flex justify-center items-center">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center max-w-[250px]  flex justify-center flex-col items-center">
                                <Image
                                    src={member?.imageUrl}
                                    alt={member.name}
                                    height={120}
                                    width={120}
                                    className=" p-2 object-contain sm:h-[280px] sm:w-full "
                                />
                                <div className="p-6">
                                    <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                                    {/* <p className="text-gray-600 ">{member.role}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Responsive;
