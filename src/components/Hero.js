import React from "react";

const Hero = () => {
    const heroImg = [
        "/images/image_01.jpg",
        "/images/image_02.jpg",
        "/images/image_03.jpg",
    ];

    return (
        <>
            <div className="frame">
                <div className="heroTxt">
                    <h1>Travel Experience</h1>
                    <p>
                    Explore the world with us, creating moments that linger as timeless souvenirs of your extraordinary travels.</p>
                </div>
                <ul>
                    {heroImg.map((image,index) => (
                        <li key={index} className="frameImg">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Hero;