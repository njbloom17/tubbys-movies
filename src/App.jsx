import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoPlayer } from './Components/VideoPlayer'

function App() {

  return (
    <>
      <div>
        Tubby's Movies!
        <VideoPlayer movieId="155" />
      </div>
    </>
  )
}

export default App
