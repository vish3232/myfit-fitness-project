import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddExercise from './screens/addnewworkout/AddExercise'
import Addworkout from './screens/addworkout/Addworkout'
import EditWorkout from './screens/EditWorkout/EditWorkout'
import Viewworkout from './screens/viewworkout/Viewworkout'
import Workout from './screens/workout/Workout'
import Myworkout from './screens/Myworkout/Myworkout.js'
import Deleteworkout from './screens/Deleteworkout/Deleteworkout'
import ViewIndividualWorkout from './screens/ViewIndividualWorkout/ViewIndividualWorkout'
import ContactUs from './screens/contactus/ContactUs'
import FitnessRead from './screens/FitnessRead/FitnessRead'
import Blog from './screens/Blog/Blog'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workout />} />
        <Route path="/page2" element={<Viewworkout />} />
        <Route path="/page3" element={<Addworkout />} />
        <Route path="/page4" element={<AddExercise />} />
        <Route path="/page5" element={<EditWorkout/>} />
        <Route path="/page6" element={<Myworkout/>} />
        <Route path="/deleteworkout" element={<Deleteworkout/>} />
        <Route path="/page7" element={<ViewIndividualWorkout/>} />
        <Route path="/page8" element={<ContactUs/>} />
        <Route path="/page9" element={<FitnessRead/>} />
        <Route path="/page10" element={<Blog/>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
