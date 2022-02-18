/** @jsxImportSource @emotion/react */

import React from 'react'
import {FitnessReadMainContainer} from './FitnessReadcss'
import fitnessRead from '../../assets/fitness_read.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const FitnessRead=()=>{
    return(
        <div css={FitnessReadMainContainer} >
            <div id="fitness-read-header-image-container" >
                <div id="fitness-read-header-container" >
                    <span>FITNESS <b>READS</b></span>
                    <p>The Best Fitness Blogs of 2021 · Nerd Fitness · Love Sweat Fitness · Breaking Muscle · Advanced Human Performance</p>
                </div>
                <div id="fitness-read-image-container" >
                    <img src={fitnessRead} />
                </div>
            </div>

            <div id="grid" >
                <div id="image_card" >
                    <img src={card1} />
                    <div>
                        <h4>What is keto diet?</h4>
                        <p>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur</p>
                        <span>
                            <img src={card1} />
                            <p>Amanda Holmes</p>
                        </span>
                    </div>
                </div>
                <div id="image_card" >
                    <img src={card2} />
                    <div>
                        <h4>How to increase your push-ups?</h4>
                        <p>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur</p>
                        <span>
                            <img src={card1} />
                            <p>Shelby Richards</p>
                        </span>
                    </div>
                </div>
                <div id="image_card" >
                    <img src={card3} />
                    <div>
                        <h4>5 Tricks you can follow to focus</h4>
                        <p>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur</p>
                        <span>
                            <img src={card1} />
                            <p>Kristen Barnes</p>
                        </span>
                    </div>
                </div>
                
            </div>

            <div id="grid" >
                <div id="image_card" >
                    <img src={card1} />
                    <div>
                        <h4>What is keto diet?</h4>
                        <p>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur</p>
                        <span>
                            <img src={card1} />
                            <p>Amanda Holmes</p>
                        </span>
                    </div>
                </div>
                <div id="image_card" >
                    <img src={card2} />
                    <div>
                        <h4>How to increase your push-ups??</h4>
                        <p>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur</p>
                        <span>
                            <img src={card1} />
                            <p>Shelby Richards</p>
                        </span>
                    </div>
                </div>
                <div id="image_card" >
                    <img src={card3} />
                    <div>
                        <h4>5 Tricks you can follow to focus</h4>
                        <p>Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur</p>
                        <span>
                            <img src={card1} />
                            <p>Kristen Barnes</p>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FitnessRead