import React from 'react'
import Workout from '../../assets/workoutvideo.png'
import './ViewIndividualWorkout.css'

const ViewIndividualWorkout = () => {
    return <div className="popup-container">
        <div className='card'>
            <div className='close-button' />
            <img src={Workout} alt="" />
            <h1>Jumping Jack</h1>

            <div className='column'>
                <span>Reps</span>
                <strong>05</strong>
            </div>

            <div className='column'>
                <span>Calorie Burn</span>
                <strong>30 Cal</strong>
            </div>

            <h5>Description</h5>

            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>
}

export default ViewIndividualWorkout