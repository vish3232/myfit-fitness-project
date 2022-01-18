 /** @jsxImportSource @emotion/react */

import React, { Component } from 'react'
import Topbar from '../../components/topbar/Topbar'

//import './Addnewworkout.id'
import drag_and_drop from '../../assets/drag_and_drop.png'
import {add_exercise_main_container,menu_container,add_exercise_sub_container,add_new_exercise_header,page_path_header,add_exercise_input_container,input_main_container,
    image_upload_container,drag_drop_image_header,drag_drop_image_upload,drag_drop_image,title_input_container,title_header,title_input_for_text,title_input,instruction_text_area,
    calorie_burn_input,reps_and_time_input,reps_and_time_input_unit,thumbail_container,close_save_button_container,close_button_container,close_header,save_button_container,save_header} from './AddExercisecss.js'
export default class AddExercise extends Component {
    state={
        title:'',
        Type:'',
        Instruction:'',
        Calorie_Burn:'',
        Rep_Time:'',
        Rep_Time_Unit:'',
        Thumbnail:''
    }
     handleChangeType=(event)=> {
         console.log(event.target.value);
        this.setState({Type: event.target.value});
      }
     
      handleChangeRepsTimeUnit=(event)=> {
          console.log(event.target.value);
        this.setState({Type: event.target.value});
      }
     
    render() {
        return (
            <React.Fragment>
        <Topbar header3={true} />
          
            <div css={add_exercise_main_container} >
            
            <div id="add_exercise_sub_container" >
            
                {/* <div id='add-new-exercise-header' >Add new excercise</div>
                <div id='page-path-header' >{"Home > My > Workout > Add Workout > Add Excerse"}</div> */}

                <div id="add_exercise_input_container" >
                    <div id="input_main_container" >
                        <div id="title_input_container" >
                            <div id="title_header" >
                            Title
                            </div>
                            <div id="title_input_for_text" >
                                <input onChange={(e)=>this.setState({title:e.target.value})} id="title_input" />
                            </div>
                        </div>
                        
                        <div id="title_input_container" >
                            <div id="title_header" >
                            Type
                            </div>
                            <div id="title_input_for_text" >
                                <select onChange={this.handleChangeType} value={this.state.Type} id="title_input"  >
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option selected value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>
                        </div>
                        
                        <div id="title_input_container" >
                            <div id="title_header" >
                            Instruction
                            </div>
                            <div id="title_input_for_text" >
                                <textarea onChange={(e)=>this.setState({Instruction:e.target.value})} id="instruction_text_area" />
                            </div>
                        </div>

                        <div id="title_input_container" >
                            <div id="title_header" >
                            Calorie Burn
                            </div>
                            <div id="title_input_for_text}">
                                <input onChange={(e)=>this.setState({Calorie_Burn:e.target.value})} id="calorie_burn_input" />
                            </div>
                        </div>

                        <div id="title_input_container" >
                            <div id="title_header" >
                            Rep / Time
                            </div>
                            <div id="title_input_for_text" >
                                <input onChange={(e)=>this.setState({Rep_Time:e.target.value})} id="reps_and_time_input" />
                                <select value={this.state.Rep_Time_Unit} onChange={this.handleChangeRepsTimeUnit} id="reps_and_time_input_unit" >
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select>
                            </div>
                          
                        </div>

                        <div id="title_input_container" >
                            <div id="title_header" >
                            Thumbnail
                            </div>
                            <div id="thumbail_container" >
                                +
                            </div>
                            
                        </div>

                    </div>
                    <div id="image_upload_container" >
                        <div id="drag_drop_image_header" >Drag and Drop Video or <a>Add Video</a></div>
                        <div id="drag_drop_image_upload" >
                            <img src={drag_and_drop} id="drag_drop_image" />
                        </div>
                    </div>
                    <div id="close_save_button_container" >
                        <div id="close_button_container" >
                            <div id="close_header" >Close</div>
                        </div>
                        <div id="save_button_container" >
                            <div id="save_header"  >Save</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}