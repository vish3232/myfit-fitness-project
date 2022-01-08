import React from 'react'
import './Workout.css'
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


const Workout = () => {
    return (
        <React.Fragment>
            <Topbar />
            <div className="workout-container">
                <div className="main-card">
                    <div className="card">
                        <div className="top-section">
                            <span></span>
                            <span className="input-wrapper">
                                <input type="text" placeholder="Jumping Jack" />
                                <button>Search</button>
                            </span>
                            <img src={Cross} alt="" />
                        </div>

                        <div className="video-section">
                            <img className="video" alt="" src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="info-container">
                                <div className="exercise-info">
                                    <span>Name</span>
                                    <span>Reps</span>
                                    <span>Calorie Burn</span>
                                </div>
                                <div className="exercise-info-todo">
                                    <span>Jumping Jack</span>
                                    <span>05</span>
                                    <span>30 Burn</span>
                                </div>
                            </div>
                        </div>

                        <div className="button-section">
                            <button className="button-container">
                                <button>+</button>
                                <span>Add Custom Exercise</span>
                            </button>

                            <div className="row">
                                <img src={Filter} alt="" />
                                <span>Name</span>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="image-card">
                                <img src={Exercise1} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise2} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise3} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise4} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise5} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise6} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise7} alt="" />
                                <div className="row">
                                    <span>Push - Ups</span>
                                    <button><span>+</span></button>
                                </div>
                            </div>

                            <div className="image-card">
                                <img src={Exercise8} alt="" />
                                <div className="row">
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
