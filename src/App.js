import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddExercise from './screens/addnewworkout/AddExercise'
import Addworkout from './screens/addworkout/Addworkout'
import EditWorkout from './screens/EditWorkout/EditWorkout'
import Viewworkout from './screens/viewworkout/Viewworkout'
import Workout from './screens/workout/Workout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workout />} />
        <Route path="/page2" element={<Viewworkout />} />
        <Route path="/page3" element={<Addworkout />} />
        <Route path="/page4" element={<AddExercise />} />
        <Route path="/page5" element={<EditWorkout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
