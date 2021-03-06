 /** @jsxImportSource @emotion/react */

import React from 'react'
//import './Workout.id'
import Topbar from '../../components/topbar/Topbar'
import Cross from '../../assets/Cross.svg'
import Filter from '../../assets/Filter.svg'
import Exercise1 from '../../assets/exercise1.png'
import Exercise2 from '../../assets/exercise2.png'
import Exercise3 from '../../assets/exercise3.png'
import Exercise4 from '../../assets/exercise4.png'
import Exercise5 from '../../assets/exercise5.png'
import Exercise6 from '../../assets/exercise6.png'
import Exercise7 from '../../assets/exercise7.png'
import Exercise8 from '../../assets/exercise8.png'
import {workout_container} from './workoutcss'

const Workout = () => {
    return (
        <React.Fragment>
            <Topbar />
            <div css={workout_container}>
                <div id="main-card" >
                    <div id="card">
                        <div id="top_section">
                            <span></span>
                            <span id="input_wrapper">
                                <input type="text" placeholder="Jumping Jack" />
                                <button>Search</button>
                            </span>
                            <img src={Cross} alt="" />
                        </div>

                        <div id="video_section">
                            <img id="video" alt="" src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div id="info_container">
                                <div id="exercise_info">
                                    <span>Name</span>
                                    <span>Reps</span>
                                    <span>Calorie Burn</span>
                                </div>
                                <div id="exercise_info_todo">
                                    <span>Jumping Jack</span>
                                    <span>05</span>
                                    <span>30 Burn</span>
                                </div>
                            </div>
                        </div>

                        <div id="button_section">
                            <button id="button_container">
                                <button>+</button>
                                <span>Add Custom Exercise</span>
                            </button>

                            <div id="ButtonSectionrow">
                                <img src={Filter} alt="" />
                                <span>Name</span>
                            </div>
                        </div>
                        <div id="grid">
                            <div id="image_card">
                                <img src={Exercise1} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise2} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise3} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise4} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise5} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise6} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise7} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div id="image_card">
                                <img src={Exercise8} alt="" />
                                <div id="ImageCardrow">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Workout
