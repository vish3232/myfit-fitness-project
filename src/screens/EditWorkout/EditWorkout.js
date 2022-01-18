/** @jsxImportSource @emotion/react */

import React, { Component } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Eye from '../../assets/eye.png'
//import './EditWorkout.id'
import Exercise from '../../assets/exercise9.png'
import {add_workout_container} from '../addworkout/Addworkoutcss.js';

class EditWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '1min',
            sets: '03'
        }
    }

    render() {
        return (
            <div>
                <Topbar header1={true} />
                <div css={add_workout_container}>
                    <div id="card">
                        <div id="row_container">
                            <div id="row">
                                <span>Workout Name</span>
                                <span>Upper Body Workout</span>
                            </div>
                            <div id="column">
                                <button>
                                    <img src={Eye} alt="" />
                                </button>
                                <button>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>


                        {/*bar section start*/}
                        <div id="bar_container">
                            <span>Warm Up Exercise</span>
                            <span></span>
                        </div>

                        <div id="workout_info">
                            <div id="header" style={{ color: '#676767' }}>
                                <div>Video</div>
                                <div>Name</div>
                                <div></div>
                                <div></div>
                                <div>Sets</div>
                                <div>Calorie Burn</div>
                            </div>

                            <div id="workout_info_row">
                                <div><img src={Exercise} alt='' /></div>
                                <div><span>Name: </span> Jumping Jack</div>
                                <div><select>
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select></div>
                                <div>
                                <input type="text" value={'1min'} />
                                </div>
                                <div><span>Sets: </span><input type="text" value={'03'} /></div>
                                <div><span>Calorie Burn: </span> 25 Cal</div>
                            </div>

                            <div id="workout_info_row">
                                <div><img src={Exercise} alt='' /></div>
                                <div><span>Name: </span> Abs Crunch</div>
                                <div>
                                <select>
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select>
                                </div>
                                <div>
                                <input type="text" value={'5 min'} />
                                </div>
                                <div><span>Sets: </span><input type="text" value={'03'} /></div>
                                <div><span>Calorie Burn: </span> 25 Cal</div>
                            </div>

                            <div id="workout_info_row">
                                <div><img src={Exercise} alt='' /></div>
                                <div><span>Name: </span> 3D Lunge</div>
                                <div>
                                <select>
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select>
                                </div>
                                <div>
                                <input type="text" value={'3 min'} />
                              
                                </div>
                                <div><span>Sets: </span><input type="text" value={'03'} /></div>
                                <div><span>Calorie Burn: </span> 25 Cal</div>
                            </div>

                            <div id="add_exercise_button">
                                <button>+</button>
                                <span>Add Exercise</span>
                            </div>
                        </div>

                        <div id="bar_container_rest">
                            <span>Rest : 5 Min</span>
                        </div>

                        <div id="bar_container">
                            <span>Circuit 1 | 3 Rounds</span>
                            <span></span>
                        </div>

                        <div id="rounds">
                            <span>No of Rounds</span>
                            <span>3</span>
                        </div>

                        <div id="workout_info">
                            <div id="header" style={{ color: '#676767' }}>
                                <div>Video</div>
                                <div>Name</div>
                                <div></div>
                                <div></div>
                                <div>Sets</div>
                                <div>Calorie Burn</div>
                            </div>

                            <div id="workout_info_row">
                                <div><img src={Exercise} alt='' /></div>
                                <div><span>Name: </span> Jumping Jack</div>
                                <div><select>
                                    <option>Time</option>
                                    <option>Reps</option>
                                </select></div>
                                <div><input type="text" value={'1min'} /></div>
                                <div><span>Sets: </span><input type="text" value={'03'} /></div>
                                <div><span>Calorie Burn: </span> 25 Cal</div>
                            </div>

                            <div id="workout_info_row">
                                <div><img src={Exercise} alt='' /></div>
                                <div><span>Name: </span> Abs Crunch</div>
                                <div><select>
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select></div>
                                <div><input type="text" value={'1min'} /></div>
                                <div><span>Sets: </span> <input type="text" value={'03'} /></div>
                                <div><span>Calorie Burn: </span> 25 Cal</div>
                            </div>

                            <div id="add_exercise_button">
                                <button>+</button>
                                <span>Add Exercise</span>
                            </div>
                        </div>

                        <div id="bar_container">
                            <span>Cool Down Exercise</span>
                            <span></span>
                        </div>

                        <div id="bottom_section">
                            <button id="button1"><span>Total Calorie Burn : <strong>245 Calorie</strong></span></button>
                            <div>
                                <button id="button2">Save</button>
                                <button id="button3">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditWorkout