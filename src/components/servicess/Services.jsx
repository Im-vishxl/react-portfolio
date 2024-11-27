import React from 'react'
import '../servicess/Services.css'
import ux from '../../assets/ui.png';
import code from '../../assets/code.png';
import backend from '../../assets/backend.png';



function Services() {
  return (
    <div id="services">
        <div className="container">
            <h1 className="subtitle">My services</h1>
            <div className="services-list">
                <div>
                    <img src={code} />
                    <h2>Web design</h2>
                    <p>I bring creativity and functionality together to transform concepts into captivating online experiences. With a keen eye for aesthetics and expertise in user-centric interfaces, I'm dedicated to crafting visually striking and functionally robust websites. Whether you're a startup or an established business, let's collaborate to turn your ideas into digital masterpieces. </p>
                </div>
                <div>
                    <img src={ux} />
                    <h2>UI/UX design</h2>
                    <p>I specialize in crafting beautiful interfaces with a focus on seamless user experiences. From launching new products to revamping existing interfaces, I'm here to elevate your digital presence. Let's collaborate to shape designs that engage and delight users. </p>
                </div>
                <div>
                    <img src={backend} />
                    <h2>Backend </h2>
                    <p>Dive into the heart of digital functionality with me, a backend developer specializing in server-side operations, database management, and application logic. From crafting secure data systems to optimizing performance, I ensure your digital operations run seamlessly. Let's build a backend that scales effortlessly with your ambitions. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services