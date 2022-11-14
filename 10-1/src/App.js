import './App.css';
import React  from 'react';
import { useRef } from 'react';




const useRefPlayer = () =>{
  const videoRef = useRef()

  
const playref = () =>{
  videoRef.current.play()
}





const pauseref = () =>{
  videoRef.current.pause()
}


  return(
  <div>
     <div className="grid-btn">
        <button className="btn" onClick={playref}>
          Play
        </button>
        <button className="btn-pause" onClick={pauseref}>
          Pause
        </button>
        
      </div>
      <video width="520" height="240" ref={videoRef}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </video>

    </div>
  );
  };



export default useRefPlayer;






