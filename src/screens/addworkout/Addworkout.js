 /** @jsxImportSource @emotion/react */
import React,{useState} from 'react'
import Topbar from '../../components/topbar/Topbar'
import Eye from '../../assets/eye.png'
//import './Addworkout.id'
import Exercise from '../../assets/exercise9.png'
import {add_workout_container} from './Addworkoutcss'


const Addworkout = () => {
    const [addVisible,setaddVisible]=useState(false)
    const AddExerciseModaToggle=()=>{
        setaddVisible(!addVisible)
    }
    return (
        <div>
            <Topbar header={true} />
            
            <div css={add_workout_container}>
                {addVisible?
            <div id="modal" >
                <div>Add Exercise</div>
                <div>Add Warm Up Exercise</div>
                <div>Rest Time</div>
                <div>Circuit</div>
                <div>Cool down</div>
                <div>Add Custome Exercise</div>
            </div>
            :<></>}
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
                            <button onClick={()=>AddExerciseModaToggle()} >
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
                        <div id="header" style={{color:'#676767'}}>
                          <div>Video</div>
                          <div>Name</div>
                          <div></div>
                          <div></div>
                          <div>Sets</div>
                          <div>Calorie Burn</div>
                        </div>

                        <div id="workout_info_row">
                          <div><img className='' src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Jumping Jack</div>
                          <div>Time</div>
                          <div>1 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div id="workout_info_row">
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Abs Crunch</div>
                          <div>Reps</div>
                          <div>5 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div id="workout_info_row">
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> 3D Lunge</div>
                          <div>Reps</div>
                          <div>3 Min</div>
                          <div><span>Sets: </span> 03</div>
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
                        <div id="header" style={{color:'#676767'}}>
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
                          <div>Time</div>
                          <div>1 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div id="workout_info_row">
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Abs Crunch</div>
                          <div>Reps</div>
                          <div>5 Min</div>
                          <div><span>Sets: </span> 03</div>
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

export default Addworkout
