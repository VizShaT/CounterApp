import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    days: 11,
    hours: 31,
    mintues: 27,
    seconds: 11,
    activeSession: "DAYS"
  };

  render() {
    const { days, hours, mintues, seconds, activeSession } = this.state;
    const setActiveSession = e => {
      this.setState({
        activeSession: e.target.value
      });
    };
    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">React Redux App</h4>
          <h1 className="App__header">Counter</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPEND</h4>
          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION : </span>
              <select
                className="Counter__text--grey"
                value={activeSession}
                onClick={setActiveSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINTUES</option>
                <option>SECONDS</option>
              </select>
            </div>
            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {mintues}
                </span>
                <span className="Counter__text--grey">MINTUES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>

          <div className="App__buttons">
            <button className="App__text--white" data-type="INCREASE_COUNTER">
              INCREASE
            </button>
            <button className="App__text--white" data-type="DECREASE_COUNTER">
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
