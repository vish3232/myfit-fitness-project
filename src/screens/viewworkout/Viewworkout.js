/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
//import './Viewworkout.id'
import Edit from '../../assets/Icon-awesome-edit.svg'
import Delete from '../../assets/Icon-material-delete.svg'
import info1 from '../../assets/Group_238.png'
import exercise from '../../assets/Group_240@2x.png'
import exercise2 from '../../assets/Group_239@2x.png'
import video from '../../assets/Icon-material-video-call.svg'
import {view_workout_main_container
} from './Viewworkoutcss.js'
const Viewworkout = () => {
  const [selectedName,setselectedName]=useState('Circuit - 1')
  const data=[{name:'Warm Up Exercise'},{name:'Circuit - 1',rounds:'3 Rounds'},{name:'Circuit - 2',rounds:'3 Rounds'},{name:'Cool Down Exercise'}]
    return (
      <React.Fragment>
          <Topbar header4={true} />
          <div css={view_workout_main_container} >
                <div id="workout_name_container" >
                    <div id="workout_name_header_container" >
                          <div id="workout_name_header" >Workout Name </div>
                          <div id="workout_name_value_header" >Upper Body Workout</div>
                    </div>
                    <div id="edit_delete_icon_container" >
                    <div id="edit_icon_container" >
                          <img src={Edit} id="edit_icon" />
                    </div>
                    <div id="delete_icon_container" >
                          <img  src={Delete} id="delete_icon" />
                    </div>
                    </div>
                </div>
                <div id="workout_list_container" >
                    {
                      data.map((data)=>{
                        return(
                        <div id="workout_list_sub_container" >
                        <div onClick={()=>setselectedName(data.name)} id="workout_list_item_container" >
                            <div id="workout_list_item_container_name_header" >{data.name}</div>
                            <div id="add_icon" >{selectedName===data.name?"-":"+"}</div>
                        </div>
                        {data.name===selectedName?
                        <div id="list_item_open_container" >
                          <div id="instruction_header" >Instruction</div>
                          <div id="sub_title_instruction_header" >Good Calorie Burn</div>
                          <div id="list_item_details_container" >
                              <div id="list_item_info_image_container" >
                                  <img id="info_image" src={info1}  />
                              </div>
                              <div id="info_content_container" >
                                  <div id="allcontent_header" >1.Abs Crunch</div>
                                  <div id="info_all_details_header_container" >
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Reps</div>
                                        <div id="allcontent_header_value" >03</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Sets</div>
                                        <div id="allcontent_header_value" >03</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Video</div>
                                        <div id="allcontent_header_value" ><div id="attached_container" >
                                         <div> Attached</div>
                                         <div id="video_svg" >
                                         <img  src={video} />
                                          </div>
                                          </div></div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                         <div id="allcontent_header_title" >Calorie Burn</div>
                                         <div id="allcontent_header_value" >25 Cal</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                          <div id="allcontent_header_title" >Rest Time</div>
                                          <div id="allcontent_header_value" >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div id="list_item_details_container" >
                              <div id="list_item_info_image_container" >
                                  <img id="info_image" src={exercise2}  />
                              </div>
                              <div id="info_content_container" >
                                  <div id="allcontent_header" >2.Alternative Full Plank</div>
                                  <div id="info_all_details_header_container" >
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Time</div>
                                        <div id="allcontent_header_value" >1 Min</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Sets</div>
                                        <div id="allcontent_header_value" >05</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Video</div>
                                        <div id="allcontent_header_value" ><div id="attached_container" >
                                         <div> Attached</div>
                                         <div id="video_svg" >
                                         <img  src={video} />
                                          </div>
                                          </div></div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                         <div id="allcontent_header_title" >Calorie Burn</div>
                                         <div id="allcontent_header_value" >50 Cal</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                          <div id="allcontent_header_title" >Rest Time</div>
                                          <div id="allcontent_header_value" >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div id="list_item_details_container" >
                              <div id="list_item_info_image_container" >
                                  <img id="info_image" src={exercise}  />
                              </div>
                              <div id="info_content_container" >
                                  <div id="allcontent_header" >3.3D Lunge</div>
                                  <div id="info_all_details_header_container" >
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Time</div>
                                        <div id="allcontent_header_value" >1 Min</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Sets</div>
                                        <div id="allcontent_header_value" >05</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                        <div id="allcontent_header_title" >Video</div>
                                        <div id="allcontent_header_value" >
                                         <div id="attached_container" >
                                         <div  > Attached</div>
                                         <div id="video_svg" >
                                         <img  src={video} />
                                          </div>
                                          </div> 
                                        </div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                         <div id="allcontent_header_title" >Calorie Burn</div>
                                         <div id="allcontent_header_value" >50 Cal</div>
                                      </div>
                                      <div id="reps_header_value_container" >
                                          <div id="allcontent_header_title" >Rest Time</div>
                                          <div id="allcontent_header_value" >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>:<></>
                        }
                        </div>
                        
                        )
                      })
                    }
                </div>
                <div id="bottom_button_container" >
                    <div id="total_calories_burn_button" >
                      <div id="total_calories_burn_button_header" >Total Calorie Burn :</div><div id="total_calories_burn_button_value" > 245 Calorie</div>  
                    </div>
                    <div id="save_btn_container" >
                        Save
                    </div>
                </div>
          </div>
      </React.Fragment>
        )
}

export default Viewworkout
