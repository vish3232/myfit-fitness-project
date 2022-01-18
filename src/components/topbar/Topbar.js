import React from 'react'
import './Topbar.css'
import Search from '../../assets/Search.png'
import Bell from '../../assets/Bell.png'
import Chat from '../../assets/Chat.png'

const Topbar = (props) => {
    return (
        <div className="top-bar-container">
            <div className="row">
                <form className="input-wrapper">
                    <input type="text" placeholder="Search here..." />
                    <img src={Search} alt="" />
                </form>

                <div className="right-container">
                    <div className="circle">
                        <img src={Bell} alt="" />
                        <div className="sub-circle">
                            <span>01</span>
                        </div>
                    </div>

                    <div className="circle">
                        <img src={Chat} alt="" />
                        <div className="sub-circle">
                            <span>12</span>
                        </div>
                    </div>

                    <div className="profile-container">
                        <div className="column">
                            <span style={{ fontSize: 16 }}>Hello, Pradip</span>
                            <span style={{ fontSize: 12 }}>Yoga Trainer</span>
                        </div>
                        <div className="circle-profile" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)' }} />
                    </div>
                </div>
            </div>
            {
                props.header?
                <>
                <div className="title">ADD WORKOUT</div>
            <div className="sub-nav">
                <div>Home</div>
                <div>{">"}</div>
                <div>My Workout</div>
                <div>{">"}</div>
                <div>Add Workout</div>
            </div>
                </>:<></>
            }
             {
                props.header1?
                <>
                <div className="title">EDIT WORKOUT</div>
            <div className="sub-nav">
                <div>Home</div>
                <div>{">"}</div>
                <div>My Workout</div>
                <div>{">"}</div>
                <div>Edit Workout</div>
            </div>
                </>:<></>
            } 
            {
                props.header3?
                <>
                <div className="title">ADD NEW EXCERCISE</div>
            <div className="sub-nav">
                <div>Home</div>
                <div>{">"}</div>
                <div>My Workout</div>
                <div>{">"}</div>
                <div>Add Workout</div>
                <div>{">"}</div>
                <div>Add Exercise</div>
                
             </div>
                </>:<></>
            }
            {
                props.header4?
                <>
                <div className="title">VIEW WORKOUT</div>
            <div className="sub-nav">
                <div>Home</div>
                <div>{">"}</div>
                <div>My Workout</div>
                <div>{">"}</div>
                <div>View Workout</div>
            </div>
                </>:<></>
            }
        </div>
    )
}

export default Topbar
