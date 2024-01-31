import {Routes, Route,useNavigate} from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import HomePage from './pages/HomePage.jsx'
import EditWorkout from './pages/EditWorkout.jsx'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div 
        className="max-w-xl m-auto flex flex-col py-4 px-4 gap-10"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit-workout" element={<EditWorkout />} />
        </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App
