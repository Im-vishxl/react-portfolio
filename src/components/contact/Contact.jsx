import React from 'react'
import '../contact/Contact.css'
import mailto from '../../assets/send.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'



function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="subtitle">Contact Me</h1>
                        <p><img src={mailto} /><a href="mailto:vishalkv214@gmail.com">  vishalkv214@gmail.com</a></p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/vishal.vichu.3152"><img src={facebook}/></a>
                            <a href="https://www.instagram.com/vshhaalll/?hl=en"><img src={insta}/></a>
                            <a href="https://github.com/Im-vishxl"><img src={github}/></a>
                            <a href="https://www.linkedin.com/in/vishal-k-v-9658b2218/"><img src={linkedin}/></a>
                        </div>
                        <a href="https://www.canva.com/design/DAGXpa_M63I/I-VEQ93z-8Ftw_b4Vj_kIQ/edit?utm_content=DAGXpa_M63I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <button className="download">RESUME</button>
                        </a>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your name" required/>
                            <input type="text" name="email" placeholder="You email" required/>
                            <textarea name="message" rows="6" placeholder="Your message"></textarea>
                            <button type="submit" value="Send" class="submitbtn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact