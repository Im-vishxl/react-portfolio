import React, { useState } from 'react';
import '../about/About.css';
import myImg from '../../assets/vishal3.jpeg';

function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabname) => {
        setActiveTab(tabname);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={myImg} alt="Vishal" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="subtitle">About Me</h1>
                        <p>
                            Greetings! I'm Vishal, a Full Stack Developer passionate about web development with expertise in crafting dynamic and user-friendly applications. My experience spans across React, MongoDB, and Node.js, enabling me to build seamless, end-to-end web solutions.
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => opentab('skills')}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'experiance' ? 'active-link' : ''}`}
                                onClick={() => opentab('experiance')}
                            >
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => opentab('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li>
                                    <span>Programming Languages</span>
                                    <br />
                                    Python, C++, C, Java, SQL, JavaScript
                                </li>
                                <li>
                                    <span>Web development</span>
                                    <br />
                                    HTML, CSS, React, Node.js, MERN stack
                                </li>
                                <li>
                                    <span>Quick learning</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experiance' ? 'active-tab' : ''}`} id="experiance">
                            <ul>
                                <li>
                                    <span>UI/UX</span>
                                    <br />
                                    2 years of experience in UI/UX design
                                </li>
                                <li>
                                    <span>Web development</span>
                                    <br />
                                    2 years of experience in frontend development
                                </li>
                                <li>
                                    <span>Backend developer</span>
                                    <br />
                                    2 years of experience in backend development
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li>
                                    <span>B.Tech in Information Technology</span>
                                    <br />
                                    College of Engineering Thalassery
                                    <br />
                                    2020 to 2024
                                    <br />
                                    CGPA: 7.71
                                </li>
                                <li>
                                    <span>Higher Secondary Education</span>
                                    <br />
                                    GHSS Pallikunn
                                    <br />
                                    2019 to 2020
                                    <br />
                                    Marks (%): 87.9
                                </li>
                                <li>
                                    <span>Secondary School Education</span>
                                    <br />
                                    Kasturba Public School
                                    <br />
                                    Marks (%): 90.1
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
