/** @jsxImportSource @emotion/react */

import React from 'react'
import {screen2} from './Screen2css'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import StarRatings from 'react-star-ratings'
import RightArrow from '../../assets/arrow-right.png'
import DotImage from '../../assets/dotImage.png'

//section1 images
import Storm from '../../assets/storm.png'
import Fight from '../../assets/fight.png'
import Scale from '../../assets/scale.png'
import Thumbsup from '../../assets/thumbs-up.png'

//section2 images
import Yoga from '../../assets/yoga-1.png'
import Yoga2 from '../../assets/yoga-2.png'
import Yoga3 from '../../assets/yoga-3.png'

//section3 images
import Trainer1 from '../../assets/Trainer1.png'
import Trainer2 from '../../assets/Trainer2.png'
import Trainer3 from '../../assets/Trainer3.png'

const Screen2 = () => {
    return (
        <div>
            <NavigationBar />
            <section css={screen2}>
                <div id='banner'>
                    <h1>Yoga</h1>
                    <h6>Home / Our Services / Yoga</h6>
                </div>


                <section id='section1'>
                    <div id='column1'>
                        <h2>Explore Yoga Classes Online</h2>
                        <p>Expand your horizons as you learn more about yoga. Try these classes that teach about yoga for strength, how to stretch, and more. Whether you’re a beginner or a master, a dabbler or a pro, these yoga classes can help you improve your abilities and learn about flexibility, and more. You’ll have the chance to develop new skills to help you learn yoga essentials to further your abilities. Each online class is broken down into short lessons that include hands-on projects to complete and share.</p>
                        <button>
                            <span>Click Here For Free Trail</span>
                            <img src={RightArrow} alt="" />
                        </button>
                        <img id='dot-image1' src={DotImage} alt="" />
                        <img id='dot-image2' src={DotImage} alt="" />
                    </div>
                    <div id='column2'>
                        <div id='card'>
                            <img src={Storm} alt="" />
                            <h4>REDUCE STRESS</h4>
                            <p>Stressed? You've come to the right place. Yoga can reduce stress and lower your blood pressure.</p>
                        </div>

                        <div id='card'>
                            <img src={Fight} alt="" />
                            <h4>INCREASE STRENGTH</h4>
                            <p>Yoga is a great way to improve your strength, balance and flexibility.</p>
                        </div>

                        <div id='card'>
                            <img src={Scale} alt="" />
                            <h4>LOSE WEIGHT</h4>
                            <p>Practicing yoga can boost your metabolism. Who knew?</p>
                        </div>

                        <div id='card'>
                            <img src={Thumbsup} alt="" />
                            <h4>FEEL BETTER</h4>
                            <p>Practicing yoga can lead to feeling happier and satisfied. And who doesn't want that???</p>
                        </div>
                    </div>
                </section>


                <section id='section2'>
                    <div id='card'>
                        <img src={Yoga} alt="" />
                        <div>
                            <h3>120 +</h3>
                            <h5>EXPERT TRAINERS</h5>
                        </div>
                    </div>
                    <div id='card card-center'>
                        <img src={Yoga3} alt="" />
                        <div>
                            <h3>550 +</h3>
                            <h5>HAPPY CLIENTS</h5>
                        </div>
                    </div>
                    <div id='card'>
                        <img src={Yoga2} alt="" />
                        <div>
                            <h3>150 +</h3>
                            <h5>TOTAL BATHS</h5>
                        </div>
                    </div>
                </section>

                <section id='section3'>
                    <h2>Our <span>YOGA Trainer</span></h2>
                    <p>Our Esteemed coaches are Experts, Industry Rockstar's exited to share their experience, wisdom and right tool with you</p>

                    <div id='grid'>
                        <div id='card'>
                            <div id='image-container'>
                                <img src={Trainer1} alt="" />
                                <div id='hover-card'>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    <button>Know More</button>
                                </div>
                            </div>
                            <div id='center'>
                                <h6>Anna Tran</h6>
                                <StarRatings
                                    rating={4.25}
                                    starDimension='14px'
                                    starSpacing='1px'
                                    starRatedColor="#FFCC00"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <span>Yoga Teacher</span>
                        </div>


                        <div id='card'>
                            <div id='image-container'>
                                <img src={Trainer2} alt="" />
                                <div id='hover-card'>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    <button>Know More</button>
                                </div>
                            </div>
                            <div id='center'>
                                <h6>Anna Tran</h6>
                                <StarRatings
                                    rating={4.25}
                                    starDimension='14px'
                                    starSpacing='1px'
                                    starRatedColor="#FFCC00"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <span>Yoga Teacher</span>
                        </div>


                        <div id='card'>
                            <div id='image-container'>
                                <img src={Trainer3} alt="" />
                                <div id='hover-card'>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    <button>Know More</button>
                                </div>
                            </div>
                            <div id='center'>
                                <h6>Anna Tran</h6>
                                <StarRatings
                                    rating={4.25}
                                    starDimension='14px'
                                    starSpacing='1px'
                                    starRatedColor="#FFCC00"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <span>Yoga Teacher</span>
                        </div>


                        <div id='card'>
                            <div id='image-container'>
                                <img src={Trainer1} alt="" />
                                <div id='hover-card'>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    <button>Know More</button>
                                </div>
                            </div>
                            <div id='center'>
                                <h6>Anna Tran</h6>
                                <StarRatings
                                    rating={4.25}
                                    starDimension='14px'
                                    starSpacing='1px'
                                    starRatedColor="#FFCC00"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <span>Yoga Teacher</span>
                        </div>


                        <div id='card'>
                            <div id='image-container'>
                                <img src={Trainer2} alt="" />
                                <div id='hover-card'>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    <button>Know More</button>
                                </div>
                            </div>
                            <div id='center'>
                                <h6>Anna Tran</h6>
                                <StarRatings
                                    rating={4.25}
                                    starDimension='14px'
                                    starSpacing='1px'
                                    starRatedColor="#FFCC00"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <span>Yoga Teacher</span>
                        </div>

                        <div id='card'>
                            <div id='image-container'>
                                <img src={Trainer3} alt="" />
                                <div id='hover-card'>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    <button>Know More</button>
                                </div>
                            </div>
                            <div id='center'>
                                <h6>Anna Tran</h6>
                                <StarRatings
                                    rating={4.25}
                                    starDimension='14px'
                                    starSpacing='1px'
                                    starRatedColor="#FFCC00"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <span>Yoga Teacher</span>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Screen2