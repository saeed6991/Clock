import { useEffect, useState } from "react";

function App() {
  const [blDisplay, setBLDisplay] = useState("5");
  const [slDisplay, setSLDisplay] = useState("25");
  const [clockRunning, setClockRunning] = useState("0");
  const [time, setTime] = useState(new Date());
  const [clockSeconds, setClockSeconds] = useState("0");
  const [clockMinute, setClockMinutes] = useState("");
  const blIncrement = () => {
    if (parseInt(blDisplay) < 60) {
      setBLDisplay(parseInt(blDisplay) + 1);
    } else {

    }
  }
  const blDecrement = () => {
    if (parseInt(blDisplay) > 1) {
      setBLDisplay(parseInt(blDisplay) - 1);
    } else {

    }
  }
  const slIncrement = () => {
    if (parseInt(slDisplay) < 60) {
      setSLDisplay(parseInt(slDisplay) + 1);
    } else {
      
    }  
  }
  const slDecrement = () => {
    if (parseInt(slDisplay) > 1) {
          setSLDisplay(parseInt(slDisplay) - 1);
        } else {
          
        }  
  }
  const resetPushed = () => {
    setBLDisplay("5");
    setSLDisplay("25");
    setClockRunning("0");
    setClockMinutes("25");
  }
  const changeRunning = () => {
    if (parseInt(clockRunning) == 0) {
      setClockRunning("1");
    } else {
      setClockRunning("0");
    }
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      if (parseInt(clockRunning) === 1) {
        if (parseInt(clockSeconds) === 0) {
          if (parseInt(clockMinute) === 0) {
            setClockRunning("0");
            setClockMinutes(slDisplay);
          } else {
            setClockMinutes(parseInt(clockMinute) - 1);
            setClockSeconds(59);
          }
        } else {
          setClockSeconds(parseInt(clockSeconds) - 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [clockRunning, clockSeconds, clockMinute, slDisplay]);

  useEffect(() => {
    if ( clockRunning == "0") {
      setClockMinutes(slDisplay);
    }
  }, [slDisplay]);

  useEffect(() => {
    if (parseInt(clockRunning) === 0) {
      setClockSeconds("0");
      setClockMinutes(slDisplay);
    } else {
      setClockSeconds("0");
      setClockMinutes(slDisplay);
    }
  }, [blDisplay, slDisplay, clockRunning]);
 
  const doNothing = ()=> {return ""}
  return (
    <div className="App">
      <div className="title">25 + 5 Clock</div>

      <div className="lengthTexts"> 
        <div className="breakLengthContainer">
          <h2 className="breakLengthText">Break length</h2>
          <div className="breakLengthTimerContainer">
            <div class="arrowUp" onClick={clockRunning=="0"?blIncrement:doNothing}>
              <div className="upperTriangle"></div>
              <div className="arrowStem"></div>
            </div>
            <div className="BLTimer"><h3>{blDisplay}</h3></div>
            <div class="arrowDown" onClick={clockRunning=="0"?blDecrement:doNothing}>
              <div className="arrowStem"></div>
              <div className="lowerTriangle"></div>
            </div>
          </div>
        </div>
        
        <div className="sessionLengthContainer">
          <h2 className="sessionLengthText">Session length</h2>
          <div className="sessionLengthTimeContainer">
            <div class="arrowUp" onClick={clockRunning=="0"?slIncrement:doNothing}>
              <div className="upperTriangle"></div>
              <div className="arrowStem"></div>
            </div>
            <div className="SLTimer"><h3>{slDisplay}</h3></div>
            <div class="arrowDown" onClick={clockRunning=="0"?slDecrement:doNothing}>
              <div className="arrowStem"></div>
              <div className="lowerTriangle"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="session">
        <h2>Session</h2>
        <div className="display">
          <h1>{clockMinute}:{clockSeconds < 10?`0${clockSeconds}`:clockSeconds}</h1>
          <div className="time"><h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1></div>
        </div>
        <div className="buttons">
          <div className="triangle" onClick={changeRunning}></div>
          <div className="pause" onClick={changeRunning}>
            <div className="rect1"></div>
            <div className="rect2"></div>
          </div>
          <div className="square" id="reset" onClick={resetPushed}>
            <p className="reset">Reset</p>
          </div>
        </div>      
      </div>

      
    </div>
  );
}

export default App;
