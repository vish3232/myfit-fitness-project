/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
//import './Viewworkout.css'
import Edit from '../../assets/Icon-awesome-edit.svg'
import Delete from '../../assets/Icon-material-delete.svg'
import info1 from '../../assets/Group_238.png'
import exercise from '../../assets/Group_240@2x.png'
import exercise2 from '../../assets/Group_239@2x.png'
import video from '../../assets/Icon-material-video-call.svg'
import {view_workout_main_container,workout_name_container,workout_name_header_container,workout_name_header,workout_name_value_header,edit_delete_icon_container,edit_icon_container,edit_icon,delete_icon_container,
delete_icon,workout_list_sub_container,workout_list_container,workout_list_item_container,workout_list_item_container_name_header,add_icon,list_item_open_container,list_item_details_container,
list_item_info_image_container,info_image,info_content_container,info_all_details_header_container,reps_header_value_container,bottom_button_container,attached_container,video_svg,total_calories_burn_button,
save_btn_container,allcontent_header,allcontent_header_title,allcontent_header_value,total_calories_burn_button_header,total_calories_burn_button_value,instruction_header,sub_title_instruction_header
} from './Viewworkoutcss.js'
const Viewworkout = () => {
  const [selectedName,setselectedName]=useState('Circuit - 1')
  const data=[{name:'Warm Up Exercise'},{name:'Circuit - 1',rounds:'3 Rounds'},{name:'Circuit - 2',rounds:'3 Rounds'},{name:'Cool Down Exercise'}]
    return (
      <React.Fragment>
          <Topbar/>
          <div css={view_workout_main_container} >
                <div css={workout_name_container} >
                    <div css={workout_name_header_container} >
                          <div css={workout_name_header} >Workout Name </div>
                          <div css={workout_name_value_header} >Upper Body Workout</div>
                    </div>
                    <div css={edit_delete_icon_container} >
                    <div css={edit_icon_container} >
                          <img src={Edit} css={edit_icon} />
                    </div>
                    <div css={delete_icon_container} >
                          <img  src={Delete} css={delete_icon} />
                    </div>
                    </div>
                </div>
                <div css={workout_list_container} >
                    {
                      data.map((data)=>{
                        return(
                        <div css={workout_list_sub_container} >
                        <div onClick={()=>setselectedName(data.name)} css={workout_list_item_container} >
                            <div css={workout_list_item_container_name_header} >{data.name}</div>
                            <div css={add_icon} >{selectedName===data.name?"-":"+"}</div>
                        </div>
                        {data.name===selectedName?
                        <div css={list_item_open_container} >
                          <div css={instruction_header} >Instruction</div>
                          <div css={sub_title_instruction_header} >Good Calorie Burn</div>
                          <div css={list_item_details_container} >
                              <div css={list_item_info_image_container} >
                                  <img css={info_image} src={info1}  />
                              </div>
                              <div css={info_content_container} >
                                  <div css={allcontent_header} >1.Abs Crunch</div>
                                  <div css={info_all_details_header_container} >
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Reps</div>
                                        <div css={allcontent_header_value} >03</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Sets</div>
                                        <div css={allcontent_header_value} >03</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Video</div>
                                        <div css={allcontent_header_value} ><div css={attached_container} >
                                         <div> Attached</div>
                                         <div css={video_svg} >
                                         <img  src={video} />
                                          </div>
                                          </div></div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                         <div css={allcontent_header_title} >Calorie Burn</div>
                                         <div css={allcontent_header_value} >25 Cal</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                          <div css={allcontent_header_title} >Rest Time</div>
                                          <div css={allcontent_header_value} >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div css={list_item_details_container} >
                              <div css={list_item_info_image_container} >
                                  <img css={info_image} src={exercise2}  />
                              </div>
                              <div css={info_content_container} >
                                  <div css={allcontent_header} >2.Alternative Full Plank</div>
                                  <div css={info_all_details_header_container} >
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Time</div>
                                        <div css={allcontent_header_value} >1 Min</div>
                                      </div>
                                      <div css='reps-header-value-container' >
                                        <div css={allcontent_header_title} >Sets</div>
                                        <div css={allcontent_header_value} >05</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Video</div>
                                        <div css={allcontent_header_value} ><div css={attached_container} >
                                         <div> Attached</div>
                                         <div css={video_svg} >
                                         <img  src={video} />
                                          </div>
                                          </div></div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                         <div css={allcontent_header_title} >Calorie Burn</div>
                                         <div css={allcontent_header_value} >50 Cal</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                          <div css={allcontent_header_title} >Rest Time</div>
                                          <div css={allcontent_header_value} >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div css={list_item_details_container} >
                              <div css={list_item_info_image_container} >
                                  <img css={info_image} src={exercise}  />
                              </div>
                              <div css={info_content_container} >
                                  <div css={allcontent_header} >3.3D Lunge</div>
                                  <div css={info_all_details_header_container} >
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Time</div>
                                        <div css={allcontent_header_value} >1 Min</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Sets</div>
                                        <div css={allcontent_header_value} >05</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                        <div css={allcontent_header_title} >Video</div>
                                        <div css={allcontent_header_value} >
                                         <div css={attached_container} >
                                         <div  > Attached</div>
                                         <div css={video_svg} >
                                         <img  src={video} />
                                          </div>
                                          </div> 
                                        </div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                         <div css={allcontent_header_title} >Calorie Burn</div>
                                         <div css={allcontent_header_value} >50 Cal</div>
                                      </div>
                                      <div css={reps_header_value_container} >
                                          <div css={allcontent_header_title} >Rest Time</div>
                                          <div css={allcontent_header_value} >3 Min</div>
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
                <div css={bottom_button_container} >
                    <div css={total_calories_burn_button} >
                      <div css={total_calories_burn_button_header} >Total Calorie Burn :</div><div css={total_calories_burn_button_value} > 245 Calorie</div>  
                    </div>
                    <div css={save_btn_container} >
                        Save
                    </div>
                </div>
          </div>
      </React.Fragment>
        )
}

export default Viewworkout
