import React from "react";
import { useEffect, useState } from "react";

function App() {

  // data array for the drumpads
const drumPads = [
  {
    keyCode: 81,
    song: "Heater-1",
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    song: "Heater-2",
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 69,
    song: "Heater-3",
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    song: "Heater-4",
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    song: "Heater-6",
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    song: "Dsc_Oh",
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    song: "Kick_n_Hat",
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    song: "Kick_n_Hat",
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    song: "Cev_H2",
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    document.addEventListener('keypress', (event) => {
      // console.log(event.id);
      // console.log(event.song)
      playSound(event.key.toUpperCase());
    })
  },[]);


// event handler to handle the click event and play sound
function playSound(selector) {
  // getting the audio element
  const audio = document.getElementById(selector);
  console.log(audio);
  // const audioSong = audio.getAttribute('song');
  // console.log(audioSong);
  audio.play();
  setActiveKey(selector)
}
// changing the song content
//  function songContent() {
//  const audioplayed = document.getElementById('drum.text').getAttribute('song');
//  const songPlayed =  document.getElementById('songContent').textContent = audioplayed;
//  }

  return (
    <div id="drum-machine">
     <h3 className="text-center">By D'souza</h3>
     <div id="display">
      {activeKey}
      <div className="drum-pads">
        {drumPads.map((drum) => (
          <div
          key={drum.keyCode}
          className="drum-pad"
          id={drum.song}
          onClick={() => {
            playSound(drum.text);
          }}
          >
            {drum.text}
           
            <audio
             className="clip"
             id={drum.text}
             src={drum.src}
             song={drum.song}
             >
            </audio>
          </div>
        ))}
        
      </div>
      
     </div>
    </div>
  );
}

export default App;
