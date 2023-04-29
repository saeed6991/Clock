import { useEffect, useState } from "react";

function App() {
  const [blDisplay, setBLDisplay] = useState("5");
  const [slDisplay, setSLDisplay] = useState("25");
  const [time, setTime] = useState(new Date());
  const [clockSeconds, setClockSeconds] = useState("0");
  const [clockMinute, setClockMinutes] = useState("");
  const [timerState, setTimerState] = useState("0");
  const [prevState, setPrevState] = useState("1");
  const [title, setTitle] = useState("Session");
  /* timerState=0 is the initial state, timerState=1 is when the button play is pushed*/
  const blIncrement = () => {
    if (timerState === "6") {
      setTimerState("7");
      setClockSeconds("0");
    }
    if (parseInt(blDisplay) < 60) {
      setBLDisplay(parseInt(blDisplay) + 1);
    } else {
    }
  };
  const blDecrement = () => {
    if (timerState === "6") {
      setTimerState("7");
      setClockSeconds("0");
    }
    if (parseInt(blDisplay) > 1) {
      setBLDisplay(parseInt(blDisplay) - 1);
    } else {
    }
  };
  const slIncrement = () => {
    console.log(timerState);
    if (timerState === "2") {
      setTimerState("3");
      setClockSeconds("0");
    }
    
    if (parseInt(slDisplay) < 60) {
      setSLDisplay(parseInt(slDisplay) + 1);
    } else {
    }
  };
  const slDecrement = () => {
    if (timerState === "2") {
      setTimerState("3");
    }
    
    if (parseInt(slDisplay) > 1) {
      setSLDisplay(parseInt(slDisplay) - 1);
    } else {
    }
  };
  const resetPushed = () => {
    setBLDisplay("5");
    setSLDisplay("25");
    setClockMinutes("25");
    setClockSeconds("0");
    setTimerState("0");
  };
  const changeRunning = () => {
    if (timerState === "1") {
      setTimerState("2");
      console.log(timerState)
    } else if (timerState === "2") {
      console.log(timerState)
      setTimerState("1");
    } else if (timerState === "0") {
      setTimerState("1");
    } else if (timerState === "3") {
      setTimerState("1");
    } else if (timerState === "5") {
      setTimerState("6");
    } else if (timerState === "7") {
      setTimerState("5");
    } else if (timerState === "6") {
      setTimerState("5");
    }
  };
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  useEffect(() => {
    if (timerState == "0") {
      setClockMinutes(slDisplay);
      console.log(timerState);
    }
  }, [slDisplay, clockMinute, clockSeconds, timerState]);

  useEffect(() => {
    if (timerState === "1") {
      const interval = setInterval(() => {
        if ((clockMinute == "0") && (clockSeconds == "0")) {
          //beep
          document.getElementById("beep").play();
          setTimeout(()=>{
            setTimerState("4");
          }, 1000);
          setClockMinutes(blDisplay);
        }
         else if ((clockMinute != "0") && (clockSeconds == "0")) {
          setClockSeconds("59");
          setClockMinutes(parseInt(clockMinute) - 1);
        } else {
          setClockSeconds(parseInt(clockSeconds) - 1);
        }
        setTime(new Date);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [clockMinute, clockSeconds, timerState,]);

  useEffect(() => {
    if (timerState === "3") {
      setClockMinutes(slDisplay);
      console.log(timerState);
    }
  }, [clockMinute, clockSeconds, timerState, slDisplay]);

  useEffect(() => {
    if (timerState == "4") {
      setClockMinutes(blDisplay);
      setClockSeconds("0");
      console.log(timerState);
      //document.getElementById("beep").play();
      setTimerState("5");
      setPrevState("5");
    }
  }, [blDisplay, clockMinute, clockSeconds, timerState, prevState]);

  useEffect(() => {
    if (timerState === "5") {
      setTitle("Break");
      const interval = setInterval(() => {
        if ((clockMinute == "0") && (clockSeconds == "0")) {
          //
          document.getElementById("beep").play();
          setTimeout(() => {
            setClockMinutes(slDisplay);
            setClockSeconds("0");
            setTimerState("1");
          }, 1000);
        }
         else if ((clockMinute != "0") && (clockSeconds == "0")) {
          setClockSeconds("59");
          setClockMinutes(parseInt(clockMinute) - 1);
        } else {
          setClockSeconds(parseInt(clockSeconds) - 1);
        }
        setTime(new Date);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [clockMinute, clockSeconds, timerState,slDisplay,]);

  useEffect(() => {
    if (timerState=="6") {
      
    }
  }, [timerState]);

  useEffect(() => {
    if (timerState === "7") {
      setClockMinutes(blDisplay);
      console.log(timerState);
    }
  }, [clockMinute, clockSeconds, timerState, blDisplay]);

  useEffect(() => {
    if ((timerState=="5")||(timerState=="6")||(timerState=="4")) {
      setTitle("Break");
    } else if ((timerState=="1")||(timerState=="2")||(timerState=="3")) {
      console.log(timerState)
      setTitle("Session");
    }
  }, [title, timerState]);

  const doNothing = () => {
    return "";
  };
  return (
    <div className="App">
      <div className="title">25 + 5 Clock</div>
      <div className="lengthTexts">
        <div className="breakLengthContainer">
          <h2 className="breakLengthText">Break length</h2>
          <div className="breakLengthTimerContainer">
            <div
              class="arrowUp"
              onClick={
                timerState === "0" || timerState === "2" || timerState === "3" || timerState === "6" || timerState === "7"
                  ? blIncrement
                  : doNothing
              }
            >
              <div className="upperTriangle"></div>
              <div className="arrowStem"></div>
            </div>
            <div className="BLTimer">
              <h3>{blDisplay}</h3>
            </div>
            <div
              class="arrowDown"
              onClick={
                timerState === "0" || timerState === "2" || timerState === "3" || timerState === "6" || timerState === "7"
                  ? blDecrement
                  : doNothing
              }
            >
              <div className="arrowStem"></div>
              <div className="lowerTriangle"></div>
            </div>
          </div>
        </div>

        <div className="sessionLengthContainer">
          <h2 className="sessionLengthText">Session length</h2>
          <div className="sessionLengthTimeContainer">
            <div
              class="arrowUp"
              onClick={
                timerState === "0" || timerState === "2" || timerState === "3" || timerState === "6" || timerState === "7"
                  ? slIncrement
                  : doNothing
              }
            >
              <div className="upperTriangle"></div>
              <div className="arrowStem"></div>
            </div>
            <div className="SLTimer">
              <h3>{slDisplay}</h3>
            </div>
            <div
              class="arrowDown"
              onClick={
                timerState === "0" || timerState === "2" || timerState === "3" || timerState === "6" || timerState === "7"
                  ? slDecrement
                  : doNothing
              }
            >
              <div className="arrowStem"></div>
              <div className="lowerTriangle"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="session">
        <h2>{title}</h2>
        <div className="display">
          <h1>
            {clockMinute}:
            {clockSeconds < 10 ? `0${clockSeconds}` : clockSeconds}
          </h1>
          <div className="time">
            <h1>
              {hours < 10 ? `0${hours}` : hours}:
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          </div>
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
