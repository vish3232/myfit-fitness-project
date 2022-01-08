import React, { Component } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Eye from '../../assets/eye.png'
import './EditWorkout.css'
import Exercise from '../../assets/exercise9.png'

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
                <Topbar />
                <div className="add-workout-container">
                    <div className="card">
                        <div className='row-container'>
                            <div className="row">
                                <span>Workout Name</span>
                                <span>Upper Body Workout</span>
                            </div>
                            <div className="column">
                                <button>
                                    <img src={Eye} alt="" />
                                </button>
                                <button>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>


                        {/*bar section start*/}
                        <div className='bar-container'>
                            <span>Warm Up Exercise</span>
                            <span></span>
                        </div>

                        <div className='workout-info'>
                            <div className='row header' style={{ color: '#676767' }}>
                                <div>Video</div>
                                <div>Name</div>
                                <div></div>
                                <div></div>
                                <div>Sets</div>
                                <div>Calorie Burn</div>
                            </div>

                            <div className='row'>
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

                            <div className='row'>
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

                            <div className='row'>
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

                            <div className='add-exercise-button'>
                                <button>+</button>
                                <span>Add Exercise</span>
                            </div>
                        </div>

                        <div className='bar-container-rest'>
                            <span>Rest : 5 Min</span>
                        </div>

                        <div className='bar-container'>
                            <span>Circuit 1 | 3 Rounds</span>
                            <span></span>
                        </div>

                        <div className='rounds'>
                            <span>No of Rounds</span>
                            <span>3</span>
                        </div>

                        <div className='workout-info'>
                            <div className='row header' style={{ color: '#676767' }}>
                                <div>Video</div>
                                <div>Name</div>
                                <div></div>
                                <div></div>
                                <div>Sets</div>
                                <div>Calorie Burn</div>
                            </div>

                            <div className='row'>
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

                            <div className='row'>
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

                            <div className='add-exercise-button'>
                                <button>+</button>
                                <span>Add Exercise</span>
                            </div>
                        </div>

                        <div className='bar-container'>
                            <span>Cool Down Exercise</span>
                            <span></span>
                        </div>

                        <div className='bottom-section'>
                            <button className='button1'><span>Total Calorie Burn : <strong>245 Calorie</strong></span></button>
                            <div>
                                <button className='button2'>Save</button>
                                <button className='button3'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditWorkout