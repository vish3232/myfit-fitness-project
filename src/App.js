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
import Screen1 from './screens/Career/Screen1'
import Screen2 from './screens/screen2/Screen2'
import Screen3 from './screens/screen3/Screen3'
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
        <Route path="/page11" element={<Screen1/>} />
        <Route path="/page12" element={<Screen2/>} />
        <Route path="/page13" element={<Screen3/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
