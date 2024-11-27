import React from 'react'
import '../Intro/Intro.css'
import hireImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'


function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Vishal </span><br />Full Stack Developer</span>
                <p className="introPara">I am a full-stack developer dedicated to building dynamic and efficient<br/> web solutions with modern technologies.</p>
                <a href="https://www.linkedin.com/in/vishal-k-v-9658b2218/" target="_blank"><button className="btn"><img src={hireImg} alt="hire me" className="btnImg"/><h4>Hire Me</h4></button></a>
            </div>
            <div className="introRight">

            </div>

        </section>
    )
}

export default Intro