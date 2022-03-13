/** @jsxImportSource @emotion/react */
import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Image1 from '../../assets/image1.png'
import DotImage from '../../assets/dotImage.png'
//import './Screen1.css'
import {screen1} from './Screen1css'
//section3 images
import Armchair from '../../assets/armchair.png'
import Exit from '../../assets/exit.png'
import WellBeing from '../../assets/wellbeing.png'
import WorkingHours from '../../assets/working-hours.png'
import Routine from '../../assets/routine.png'
import Game from '../../assets/game.png'
import Performance from '../../assets/performance.png'
import Idea from '../../assets/idea.png'
import Pantry from '../../assets/pantry.png'

//section4 images
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Image5 from '../../assets/image5.png'
import RightArrow from '../../assets/arrow-right.png'
import Footer from '../../components/Footer/Footer'


const Screen1 = () => {
  return (
    <div>
      <NavigationBar />
      <section css={screen1}>
        <div id='banner'>
          <h1>Let's Make it happen</h1>
          <h6>Home / Career</h6>
        </div>


        <section id='section2'>
          <div id='info'>
            <h2>Step Inside Our Office</h2>
            <p>We’ve carefully handpicked individuals who believe in the vision of MyFit Myntra - to make this world a healthier, fitter place. Breaking boundaries and doing more than what is expected is what people at MyFit Myntra are known for. Join our team of highly motivated individuals, as we reach out to each other to build a product just as unique as you.</p>
          </div>
          <div id='image'>
            <img src={Image1} alt="" />
            <img id='dot-image' src={DotImage} alt="" />
          </div>
        </section>


        <section id='section3'>
          <img id='dot-image hide' src={DotImage} alt="" />
          <h2>Why you should Join Us</h2>
          <div id='grid'>
            <div id='card'>
              <img src={Armchair} alt="" />
              <h6>No Hierarchy</h6>
            </div>

            <div id='card'>
              <img src={Exit} alt="" />
              <h6>No "Leave Policy"</h6>
            </div>

            <div id='card'>
              <img src={WellBeing} alt="" />
              <h6>Health and Wellness</h6>
            </div>

            <div id='card'>
              <img src={WorkingHours} alt="" />
              <h6>Flexible Working Hours</h6>
            </div>

            <div id='card'>
              <img src={Routine} alt="" />
              <h6>Work Life Balance</h6>
            </div>

            <div id='card'>
              <img src={Game} alt="" />
              <h6>Games Room</h6>
            </div>

            <div id='card'>
              <img src={Performance} alt="" />
              <h6>Performance Driven Culture</h6>
            </div>

            <div id='card'>
              <img src={Idea} alt="" />
              <h6>Pick your Projects</h6>
            </div>

            <div id='card'>
              <img src={Pantry} alt="" />
              <h6>Pre-loaded Pantry</h6>
            </div>
          </div>
        </section>


        <section id='section4'>
          <h2>All Openings</h2>
          <div id='underline' />
          <div id='grid'>
             <div id='card'>
                  <img src={Image2} alt="" />
                  <div id="center">
                    <h4>Software Engineer</h4>
                    <button>
                       <span>View Details</span>
                       <img src={RightArrow} alt="" />
                    </button>
                  </div>
             </div>

             <div id='card'>
                  <img src={Image3} alt="" />
                  <div id="center">
                    <h4>Software Engineer</h4>
                    <button>
                       <span>View Details</span>
                       <img src={RightArrow} alt="" />
                    </button>
                  </div>
             </div>


             <div id='card'>
                  <img src={Image4} alt="" />
                  <div id="center">
                    <h4>Software Engineer</h4>
                    <button>
                       <span>View Details</span>
                       <img src={RightArrow} alt="" />
                    </button>
                  </div>
             </div>
          </div>
          <img id='svg' src={Image5} alt="" />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default Screen1