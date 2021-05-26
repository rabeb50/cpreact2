import React from 'react'
import imageInSrc from './imageInSrc.png'
import './style.css'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imageInSrc} alt="source"/>
        <br />
        <img src={"/imageInPublic.png"} alt="public" />
      </div>
      <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" >
      </source>
      </video>
    </div>
  );
}

export default App;
