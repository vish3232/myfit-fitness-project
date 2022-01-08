import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import './Viewworkout.css'
import Edit from '../../assets/Icon-awesome-edit.svg'
import Delete from '../../assets/Icon-material-delete.svg'
import info1 from '../../assets/Group_238.png'
import exercise from '../../assets/Group_240@2x.png'
import exercise2 from '../../assets/Group_239@2x.png'
import video from '../../assets/Icon-material-video-call.svg'
const Viewworkout = () => {
  const [selectedName,setselectedName]=useState('Circuit - 1')
  const data=[{name:'Warm Up Exercise'},{name:'Circuit - 1',rounds:'3 Rounds'},{name:'Circuit - 2',rounds:'3 Rounds'},{name:'Cool Down Exercise'}]
    return (
      <React.Fragment>
          <Topbar/>
          <div className='view-workout-main-container' >
                <div className='workout-name-container' >
                    <div className='workout-name-header-container' >
                          <div className='workout-name-header' >Workout Name </div>
                          <div className='workout-name-value-header' >Upper Body Workout</div>
                    </div>
                    <div className='edit-delete-icon-container' >
                    <div className='edit-icon-container' >
                          <img src={Edit} className='edit-icon' />
                    </div>
                    <div className='delete-icon-container' >
                          <img  src={Delete} className='delete-icon' />
                    </div>
                    </div>
                </div>
                <div className='workout-list-container' >
                    {
                      data.map((data)=>{
                        return(
                        <div className='workout-list-sub-container' >
                        <div onClick={()=>setselectedName(data.name)} className='workout-list-item-container' >
                            <div className='workout-list-item-container-name-header' >{data.name}</div>
                            <div className='add-icon' >{selectedName===data.name?"-":"+"}</div>
                        </div>
                        {data.name===selectedName?
                        <div className='list-item-open-container' >
                          <div className='instruction-header' >Instruction</div>
                          <div className='sub-title-instruction-header' >Good Calorie Burn</div>
                          <div className='list-item-details-container' >
                              <div className='list-item-info-image-container' >
                                  <img className='info-image' src={info1}  />
                              </div>
                              <div className='info-content-container' >
                                  <div className='allcontent-header' >1.Abs Crunch</div>
                                  <div className='info-all-details-header-container' >
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Reps</div>
                                        <div className='allcontent-header-value' >03</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Sets</div>
                                        <div className='allcontent-header-value' >03</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Video</div>
                                        <div className='allcontent-header-value' ><div className='attached-container' >
                                         <div> Attached</div>
                                         <div className='video-svg' >
                                         <img  src={video} />
                                          </div>
                                          </div></div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                         <div className='allcontent-header-title' >Calorie Burn</div>
                                         <div className='allcontent-header-value' >25 Cal</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                          <div className='allcontent-header-title' >Rest Time</div>
                                          <div className='allcontent-header-value' >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='list-item-details-container' >
                              <div className='list-item-info-image-container' >
                                  <img className='info-image' src={exercise2}  />
                              </div>
                              <div className='info-content-container' >
                                  <div className='allcontent-header' >2.Alternative Full Plank</div>
                                  <div className='info-all-details-header-container' >
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Time</div>
                                        <div className='allcontent-header-value' >1 Min</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Sets</div>
                                        <div className='allcontent-header-value' >05</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Video</div>
                                        <div className='allcontent-header-value' ><div className='attached-container' >
                                         <div> Attached</div>
                                         <div className='video-svg' >
                                         <img  src={video} />
                                          </div>
                                          </div></div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                         <div className='allcontent-header-title' >Calorie Burn</div>
                                         <div className='allcontent-header-value' >50 Cal</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                          <div className='allcontent-header-title' >Rest Time</div>
                                          <div className='allcontent-header-value' >3 Min</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='list-item-details-container' >
                              <div className='list-item-info-image-container' >
                                  <img className='info-image' src={exercise}  />
                              </div>
                              <div className='info-content-container' >
                                  <div className='allcontent-header' >3.3D Lunge</div>
                                  <div className='info-all-details-header-container' >
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Time</div>
                                        <div className='allcontent-header-value' >1 Min</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Sets</div>
                                        <div className='allcontent-header-value' >05</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                        <div className='allcontent-header-title' >Video</div>
                                        <div className='allcontent-header-value' >
                                         <div className='attached-container' >
                                         <div  > Attached</div>
                                         <div className='video-svg' >
                                         <img  src={video} />
                                          </div>
                                          </div> 
                                        </div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                         <div className='allcontent-header-title' >Calorie Burn</div>
                                         <div className='allcontent-header-value' >50 Cal</div>
                                      </div>
                                      <div className='reps-header-value-container' >
                                          <div className='allcontent-header-title' >Rest Time</div>
                                          <div className='allcontent-header-value' >3 Min</div>
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
                <div className='bottom-button-container' >
                    <div className='total-calories-burn-button' >
                      <div className='total-calories-burn-button-header' >Total Calorie Burn :</div><div className='total-calories-burn-button-value' > 245 Calorie</div>  
                    </div>
                    <div className='save-btn-container' >
                        Save
                    </div>
                </div>
          </div>
      </React.Fragment>
        )
}

export default Viewworkout
