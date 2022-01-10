 /** @jsxImportSource @emotion/react */

import React, { Component } from 'react'
import Topbar from '../../components/topbar/Topbar'

//import './Addnewworkout.css'
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
        <Topbar title="ADD NEW EXCERCISE" path1="Home" path2="My Workout" path3="Add Workout" path4="Add Exercise" />
          
            <div css={add_exercise_main_container} >
            
            <div css={add_exercise_sub_container} >
            
                {/* <div css='add-new-exercise-header' >Add new excercise</div>
                <div css='page-path-header' >{"Home > My > Workout > Add Workout > Add Excerse"}</div> */}

                <div css={add_exercise_input_container} >
                    <div css={input_main_container} >
                        <div css={title_input_container} >
                            <div css={title_header} >
                            Title
                            </div>
                            <div css={title_input_for_text} >
                                <input onChange={(e)=>this.setState({title:e.target.value})} css={title_input} />
                            </div>
                        </div>
                        
                        <div css={title_input_container} >
                            <div css={title_header} >
                            Type
                            </div>
                            <div css={title_input_for_text} >
                                <select onChange={this.handleChangeType} value={this.state.Type} css={title_input}  >
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option selected value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>
                        </div>
                        
                        <div css={title_input_container} >
                            <div css={title_header} >
                            Instruction
                            </div>
                            <div css={title_input_for_text} >
                                <textarea onChange={(e)=>this.setState({Instruction:e.target.value})} css={instruction_text_area} />
                            </div>
                        </div>

                        <div css={title_input_container} >
                            <div css={title_header} >
                            Calorie Burn
                            </div>
                            <div css={title_input_for_text} >
                                <input onChange={(e)=>this.setState({Calorie_Burn:e.target.value})} css={calorie_burn_input} />
                            </div>
                        </div>

                        <div css={title_input_container} >
                            <div css={title_header} >
                            Rep / Time
                            </div>
                            <div css={title_input_for_text} >
                                <input onChange={(e)=>this.setState({Rep_Time:e.target.value})} css={reps_and_time_input} />
                                <select value={this.state.Rep_Time_Unit} onChange={this.handleChangeRepsTimeUnit} css={reps_and_time_input_unit} >
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select>
                            </div>
                          
                        </div>

                        <div css={title_input_container} >
                            <div css={title_header} >
                            Thumbnail
                            </div>
                            <div css={thumbail_container} >
                                +
                            </div>
                            
                        </div>

                    </div>
                    <div css={image_upload_container} >
                        <div css={drag_drop_image_header} >Drag and Drop Video or <a>Add Video</a></div>
                        <div css={drag_drop_image_upload} >
                            <img src={drag_and_drop} css={drag_drop_image} />
                        </div>
                    </div>
                    <div css={close_save_button_container} >
                        <div css={close_button_container} >
                            <div css={close_header} >Close</div>
                        </div>
                        <div css={save_button_container} >
                            <div css={save_header}  >Save</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}