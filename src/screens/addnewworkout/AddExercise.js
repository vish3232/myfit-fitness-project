
import React, { Component } from 'react'
import Topbar from '../../components/topbar/Topbar'

import './Addnewworkout.css'
import drag_and_drop from '../../assets/drag_and_drop.png'
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
          
            <div className='add-exercise-main-container' >
            
            <div className='add-exercise-sub-container' >
            
                {/* <div className='add-new-exercise-header' >Add new excercise</div>
                <div className='page-path-header' >{"Home > My > Workout > Add Workout > Add Excerse"}</div> */}

                <div className='add-exercise-input-container' >
                    <div className='input-main-container' >
                        <div className='title-input-container' >
                            <div className='title-header' >
                            Title
                            </div>
                            <div className='title-input-for-text' >
                                <input onChange={(e)=>this.setState({title:e.target.value})} className='title-input' />
                            </div>
                        </div>
                        
                        <div className='title-input-container' >
                            <div className='title-header' >
                            Type
                            </div>
                            <div className='title-input-for-text' >
                                <select onChange={this.handleChangeType} value={this.state.Type} className='title-input'  >
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option selected value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className='title-input-container' >
                            <div className='title-header' >
                            Instruction
                            </div>
                            <div className='title-input-for-text' >
                                <textarea onChange={(e)=>this.setState({Instruction:e.target.value})} className='instruction-text-area' />
                            </div>
                        </div>

                        <div className='title-input-container' >
                            <div className='title-header' >
                            Calorie Burn
                            </div>
                            <div className='title-input-for-text' >
                                <input onChange={(e)=>this.setState({Calorie_Burn:e.target.value})} className='calorie-burn-input' />
                            </div>
                        </div>

                        <div className='title-input-container' >
                            <div className='title-header' >
                            Rep / Time
                            </div>
                            <div className='title-input-for-text' >
                                <input onChange={(e)=>this.setState({Rep_Time:e.target.value})} className='reps-and-time-input' />
                                <select value={this.state.Rep_Time_Unit} onChange={this.handleChangeRepsTimeUnit} className='reps-and-time-input-unit' >
                                    <option>Reps</option>
                                    <option>Time</option>
                                </select>
                            </div>
                          
                        </div>

                        <div className='title-input-container' >
                            <div className='title-header' >
                            Thumbnail
                            </div>
                            <div className='thumbail-container' >
                                +
                            </div>
                            
                        </div>

                    </div>
                    <div className='image-upload-container' >
                        <div className='drag-drop-image-header' >Drag and Drop Video or <a>Add Video</a></div>
                        <div className='drag-drop-image-upload' >
                            <img src={drag_and_drop} className='drag-drop-image' />
                        </div>
                    </div>
                    <div className='close-save-button-container' >
                        <div className='close-button-container' >
                            <div className='close-header' >Close</div>
                        </div>
                        <div className='save-button-container' >
                            <div className='save-header'  >Save</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}