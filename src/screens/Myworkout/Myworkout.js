/** @jsxImportSource @emotion/react */

import React from 'react'
import {my_workout_container} from './Myworkoutcss.js'
import { Button,Icon } from 'semantic-ui-react'
import Topbar from '../../components/topbar/Topbar.js'
const Myworkout=()=> {
    return (
        <div css={my_workout_container} >
            <Topbar  />
            <div id="header-main-container" >
                <div id="header-container" >
                        <span>
                        My Workout
                        </span>
                        <p>
                        {"Home > My Workout > List of Workout"}
                        </p>
                </div>
                <div id="delete-add-button-container" >
                    <div id="delete-button-container" >
                            <Button circular id="delete-btn"  icon='trash'  />
                            <span>Delete Workout</span>
                    </div>

                    <div id="add-button-container" >
                            <Button circular id="add-btn"  icon='plus'  />
                            <span>Add Workout</span>
                    </div>

                </div>

            </div>

            <div id="card" >
                <div id="search-bar-container" >
                    <input placeholder='Client'  />
                    <Button icon='search' />
                </div>
                <div id="border" >

                </div>
                <div id="list-of-workout-header" >
                    <div style={{color:'white'}} >Image</div>
                    <div>NAME</div>
                    <div>Exercises</div>
                    <div>Calorie Burn</div>
                    <div>Date Created</div>
                    <div>Actions</div>
                </div>
                <div id="border-for-list" >

                </div>

                <div id="list-of-workout" >
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  />
                    <span>Upper Body Workout</span>
                    <span>7 Exercises</span>
                    <span>30 Cal</span>
                    <span>20.May.20</span>
                    <div>
                    <Icon id="edit" name='pencil alternate' />
                    <Icon id="delete"  name='trash' />
                    
                    </div>
                </div>
                <div id="border-for-list" >

                </div>

                <div id="list-of-workout" >
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  />
                    <span>Upper Body Workout</span>
                    <span>7 Exercises</span>
                    <span>30 Cal</span>
                    <span>20.May.20</span>
                    <div>
                    <Icon id="edit" name='pencil alternate' />
                    <Icon id="delete"  name='trash' />
                    
                    </div>
                </div>

                <div id="border-for-list" >

                </div>

                
                <div id="list-of-workout" >
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  />
                    <span>Upper Body Workout</span>
                    <span>7 Exercises</span>
                    <span>30 Cal</span>
                    <span>20.May.20</span>
                    <div>
                    <Icon id="edit" name='pencil alternate' />
                    <Icon id="delete"  name='trash' />
                    
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Myworkout
