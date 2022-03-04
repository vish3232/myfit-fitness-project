import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo2.png'
import Appstore from '../../assets/app-store.png'
import Appandroid from '../../assets/app-android.png'
import FB from '../../assets/fb.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import Linedin from '../../assets/linkedin.png'
import FooterSvg from '../../assets/footersvg.jpeg'

const Footer = () => {
    return (
        <footer>
            <div className='svg-container'>
                <img className='svg' src={FooterSvg} alt="" />
            </div>
            <section className='section1'>
                <div className='column1'>
                    <img src={Logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                </div>

                <div className='column2'>
                    <a href="#1">Contact us</a>
                    <a href="#1">Blog</a>
                    <a href="#1">Partner</a>
                    <a href="#1">Talks</a>
                    <a href="#1">Careers</a>
                </div>

                <div className='column3'>
                    <a href="#1">Free Trial</a>
                    <a href="#1">MyFit for businesses</a>
                    <a href="#1">MYFIT FRANCHISE</a>
                    <a href="#1">MyFit PASS NETWORK</a>
                    <a href="#1">CORPORATE PARTNERSHIPS</a>
                </div>

                <div className='column4'>
                    <img src={Appstore} alt="" />
                    <img src={Appandroid} alt="" />
                </div>
            </section>

            <section className='section2'>
                <h4>RELATED SEARCHES</h4>
                <div className='grid'>
                    <div className='column'>
                        <a href="#1">Gym Near Me</a>
                        <a href="#1">Consult Nutritionist Online</a>
                        <a href="#1">Chest Exercises at Home</a>
                        <a href="#1">Stress Management</a>
                        <a href="#1">Mindfulness Medition</a>
                        <a href="#1">Gyms in Mumbai</a>
                        <a href="#1">Gyms in Kolkata</a>
                        <a href="#1">Home Workouts</a>
                    </div>

                    <div className='column'>
                        <a href="#1">Online Personal Training</a>
                        <a href="#1">Consult Gynecologist Online</a>
                        <a href="#1">Fat Burning Exercises</a>
                        <a href="#1">Yoga Asanas</a>
                        <a href="#1">Yoga Nidra</a>
                        <a href="#1">Gyms in Delhi</a>
                        <a href="#1">Gyms in Ahmedabad</a>
                    </div>

                    <div className='column'>
                        <a href="#1">Online Doctor Consultation</a>
                        <a href="#1">Diagnostic tests</a>
                        <a href="#1">Diagnostic tests</a>
                        <a href="#1">Six Pack Workout</a>
                        <a href="#1">Meditation Music</a>
                        <a href="#1">Gyms in Pune</a>
                        <a href="#1">Gyms in Chandigarh</a>
                    </div>

                    <div className='column'>
                        <a href="#1">Therapist consultation</a>
                        <a href="#1">Food Near Me</a>
                        <a href="#1">Yoga Postures for Beginners</a>
                        <a href="#1">Pranayama</a>
                        <a href="#1">Orthopedist doctor near me</a>
                        <a href="#1">Gyms in Hyderabad</a>
                        <a href="#1">Gyms in Indore</a>
                    </div>

                    <div className='column'>
                        <a href="#1">Online Fitness Classes</a>
                        <a href="#1">Healthy Recipes</a>
                        <a href="#1">Surya Namaskar for Beginners</a>
                        <a href="#1">Bedtime Stories for Kids</a>
                        <a href="#1">Manchow Soup</a>
                        <a href="#1">Gyms in Chennai</a>
                        <a href="#1">Gyms in Coimbatore</a>
                    </div>

                    <div className='column'>
                        <a href="#1">Consult Cardiologist Online</a>
                        <a href="#1">Reduce Belly Fat</a>
                        <a href="#1">Yoga For Stress Relief</a>
                        <a href="#1">Meditation in Hindi</a>
                        <a href="#1">Badam Milk</a>
                        <a href="#1">Gyms in Jaipur</a>
                        <a href="#1">Gyms in Bangalore</a>
                    </div>
                </div>
            </section>

            <section className='section3'>
                <div className='column1'>
                    <a href="#1">Contact Us</a>
                    <a href="#1">FAQ</a>
                    <a href="#1">Terms & conditions</a>
                    <a href="#1">Privacy Policy</a>
                    <a href="#1">Refund Policy</a>
                </div>
                <div>
                    <img src={FB} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Linedin} alt="" />
                </div>
            </section>
        </footer>
    )
}

export default Footer