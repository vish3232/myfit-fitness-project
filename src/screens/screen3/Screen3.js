import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './Screen3.css'
import Image1 from '../../assets/ScreenImage.png'
import Certificate from '../../assets/Certificate.png'
import StarRatings from 'react-star-ratings'

const Screen3 = () => {
    return (
        <div>
            <NavigationBar />
            <section className='screen3'>
                <div className='banner' />
                <div className='grid'>
                    <div className='column1'>
                        <img className='profile' src={Image1} alt="" />
                        <div className='image-row'>
                            <img src={Image1} alt="" />
                            <img src={Image1} alt="" />
                            <img src={Image1} alt="" />
                            <img src={Image1} alt="" />
                            <img src={Image1} alt="" />
                        </div>
                    </div>
                    <div className='column2'>
                        <h2>Christina Prakash</h2>
                        <span className='sub-title'>Yoga / Gym Trainer</span>
                        <StarRatings
                            rating={4.25}
                            starDimension='14px'
                            starSpacing='1px'
                            starRatedColor="#FFCC00"
                            numberOfStars={5}
                            name='rating'
                        />

                        <h2 className='next-section'>About Me</h2>
                        <p>Fitness to me is a lifestyle, it’s being the best version of yourself and making the right choices for your body in terms of exercising and eating right. It is a journey where one needs to display immense dedication and patience, and a process which involves constant learning and debunking myths and misconceptions. As a mentor, I aim to reach out to as many as I can to motivate and guide them to achieve their fitness goals. Always remember, you have within you the strength, the patience, and the passion to reach your goal… Let’s get started!</p>

                        <h2 className='next-section'>Speciality</h2>
                        <div className='tags-container'>
                            <span>Sports Nutrition</span>
                            <span>General well being</span>
                            <span>Weight Gain</span>
                            <span>Weight Loss</span>
                        </div>

                        <h2 className='next-section'>Interested In</h2>
                        <div className='tags-container'>
                            <span>Martial Arts</span>
                            <span>Bodybuilding</span>
                            <span>Sports</span>
                            <span>Mentoring</span>
                            <span>Art</span>
                        </div>

                        <h2 className='next-section'>Certificates</h2>
                        <div className='certificate-container'>
                            <div className='card'>
                               <img src={Certificate} alt="" />
                               <span>INFS Certified <br/>Fitness</span>
                            </div>

                            <div className='card'>
                               <img src={Certificate} alt="" />
                               <span>Diet Planning <br/>Workshop</span>
                            </div>

                            <div className='card'>
                               <img src={Certificate} alt="" />
                               <span>Sports Nutrition <br/>Spe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Screen3