function App() {

  return (
    <div className="App">
      <div className="title">25 + 5 Clock</div>
      
      <div className="lengthTexts"> 
        <div className="breakLengthContainer">
          <h2 className="breakLengthText">Break length</h2>
          <div className="breakLengthTimerContainer">
            <div class="arrowUp">
              <div className="upperTriangle"></div>
              <div className="arrowStem"></div>
            </div>
            <div className="BLTimer"></div>
            <div class="arrowDown">
              <div className="arrowStem"></div>
              <div className="lowerTriangle"></div>
            </div>
          </div>
        </div>
        
        <div className="sessionLengthContainer">
          <h2 className="sessionLengthText">Session length</h2>
          <div className="sessionLengthTimeContainer">
            <div class="arrowUp">
              <div className="upperTriangle"></div>
              <div className="arrowStem"></div>
            </div>
            <div className="SLTimer"></div>
            <div class="arrowDown">
              <div className="arrowStem"></div>
              <div className="lowerTriangle"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="session">
        <h2>Session</h2>
        <div className="display"></div>
        <div className="buttons">
          <div className="triangle"></div>
          <div className="pause">
            <div className="rect1"></div>
            <div className="rect2"></div>
          </div>
          <div className="square">
            <p className="reset">Reset</p>
          </div>
        </div>      
      </div>
      
    </div>
  );
}

export default App;
