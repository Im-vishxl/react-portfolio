import React, { useState } from 'react';
import '../works/Works.css';
import link from '../../assets/link.png';
import work1 from '../../assets/work-1.png';
import work2 from '../../assets/work-2.png';
import work3 from '../../assets/work-3.png';
import work4 from '../../assets/work-4.jpg'; // New work images
import work5 from '../../assets/work-5.jpg';
import work6 from '../../assets/work-6.jpg';
import work7 from '../../assets/work-7.jpg';
import work8 from '../../assets/work-8.jpg';

function Works() {
    const allWorks = [
        {
            img: work1,
            title: "Social media app",
            description: "A social media platform simplifies sharing experiences with ease connect with others through a clean interface.",
            link: "https://github.com/Im-vishxl"
        },
        {
            img: work2,
            title: "Book repository",
            description: "An online platform offering seamless access to a diverse collection of books and documents.",
            link: "https://github.com/Im-vishxl"
        },
        {
            img: work3,
            title: "Turf booking and hosting platform",
            description: "A website that offers one-stop solution for all things related to turf sports and event hosting.",
            link: "https://team7deployments.netlify.app/"
        },
        {
            img: work4,
            title: "E-commerce Website",
            description: "A fully-featured e-commerce platform with product browsing, checkout, and payment functionality.",
            link: "https://github.com/Im-vishxl/ecommweb"
        },
        {
            img: work5,
            title: "Weather App",
            description: "An interactive app to fetch and display real-time weather data for any location.",
            link: "https://github.com/Im-vishxl"
        },
        {
            img: work6,
            title: "Travel Planner",
            description: "A web app that helps users plan routes between destinations, showing popular spots and budget-friendly options along the way.",
            link: "https://github.com/Im-vishxl/travelPlanner"
        },
        {
            img: work7,
            title: "Traffic Management Project",
            description: "An efficient system to manage and optimize traffic flow in urban areas.",
            link: "https://github.com/Im-vishxl"
        },
        {
            img: work8,
            title: "Employee Dashboard",
            description: "An intuitive dashboard for managing employee data, tracking sales, and optimizing interactions with real-time updates and analytics.",
            link: "https://github.com/Im-vishxl/employeeDash"
        }
    ];


    const [visibleWorks, setVisibleWorks] = useState(4); // Initially show 3 works

    const handleShowMore = () => {
        setVisibleWorks((prevCount) => prevCount + 4); // Load 5 more works on button click
    };

    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="subtitle">My Work</h1>
                <div className="work-list">
                    {allWorks.slice(0, visibleWorks).map((work, index) => (
                        <div className="work" key={index}>
                            <img src={work.img} alt={work.title} />
                            <div className="layer">
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <a href={work.link} target="_blank" rel="noopener noreferrer">
                                    <img src={link} className="linkImg" alt="link icon" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleWorks < allWorks.length && ( // Show button only if there are more works to display
                    <button className="show-more-btn" onClick={handleShowMore}>
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
}

export default Works;
