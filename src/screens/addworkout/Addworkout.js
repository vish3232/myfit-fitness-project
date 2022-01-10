 /** @jsxImportSource @emotion/react */
import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Eye from '../../assets/eye.png'
//import './Addworkout.css'
import Exercise from '../../assets/exercise9.png'
import {add_workout_container,card,row,column,row_container,bar_container,workout_info,workout_info_row,add_exercise_button,bar_container_rest,rounds,border,bottom_section,button1,button2,button3,header} from './Addworkoutcss'


const Addworkout = () => {
    return (
        <div>
            <Topbar />
            <div css={add_workout_container}>
                <div css={card}>
                    <div css={row_container}>
                        <div css={row}>
                            <span>Workout Name</span>
                            <span>Upper Body Workout</span>
                        </div>
                        <div css={column}>
                            <button>
                                <img src={Eye} alt="" />
                            </button>
                            <button>
                                <span>+</span>
                            </button>
                        </div>
                    </div>


                    {/*bar section start*/}
                    <div css={bar_container}>
                        <span>Warm Up Exercise</span>
                        <span></span>
                    </div>

                    <div css={workout_info}>
                        <div css={workout_info_row,header} style={{color:'#676767'}}>
                          <div>Video</div>
                          <div>Name</div>
                          <div></div>
                          <div></div>
                          <div>Sets</div>
                          <div>Calorie Burn</div>
                        </div>

                        <div css={workout_info_row}>
                          <div><img className='' src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Jumping Jack</div>
                          <div>Time</div>
                          <div>1 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div css={workout_info_row}>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Abs Crunch</div>
                          <div>Reps</div>
                          <div>5 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div css={workout_info_row}>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> 3D Lunge</div>
                          <div>Reps</div>
                          <div>3 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div css={add_exercise_button}>
                            <button>+</button>
                            <span>Add Exercise</span>
                        </div>
                    </div>

                    <div css={bar_container_rest}>
                        <span>Rest : 5 Min</span>
                    </div>

                    <div css={bar_container}>
                        <span>Circuit 1 | 3 Rounds</span>
                        <span></span>
                    </div>

                    <div css={rounds}>
                        <span>No of Rounds</span>
                        <span>3</span>
                    </div>

                    <div css={workout_info}>
                        <div css={workout_info_row,header} style={{color:'#676767'}}>
                          <div>Video</div>
                          <div>Name</div>
                          <div></div>
                          <div></div>
                          <div>Sets</div>
                          <div>Calorie Burn</div>
                        </div>

                        <div css={workout_info_row}>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Jumping Jack</div>
                          <div>Time</div>
                          <div>1 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div css={workout_info_row}>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Abs Crunch</div>
                          <div>Reps</div>
                          <div>5 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div css={add_exercise_button}>
                            <button>+</button>
                            <span>Add Exercise</span>
                        </div>
                    </div>

                    <div css={bar_container}>
                        <span>Cool Down Exercise</span>
                        <span></span>
                    </div>
                    <div css={bottom_section}>
                            <button css={button1}><span>Total Calorie Burn : <strong>245 Calorie</strong></span></button>
                            <div>
                                <button css={button2}>Save</button>
                                <button css={button3}>Edit</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addworkout
