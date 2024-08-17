import { useContext } from 'react'
import './App.css'
import Display from './component/Display'
import Player from './component/Player'
import SideBar from './component/SideBar'
import {PlayerContext} from './context/PlayerContext'
function App() {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
       <div className='h-[90%] flex'>
          <SideBar/>
          <Display/>
       </div>
       <Player/>
       <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
