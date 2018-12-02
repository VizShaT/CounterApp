import React, { Component } from "react";
import "./App.css";
import {
  setActiveSession as setActiveSessionAC,
  updateCounter
} from "./actions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const days = this.props.days;
    const hours = this.props.hours;
    const minutes = this.props.minutes;
    const seconds = this.props.seconds;
    const activeSession = this.props.activeSession;

    const setActiveSession = e => {
      this.props.setActiveSessionAC(e.target.value);
    };
    const handleCounter = e => {
      const type = e.target.dataset.type;
      this.props.updateCounter(type, activeSession);
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
                onChange={setActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
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
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
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
            <button
              className="App__text--white"
              data-type="INCREASE_COUNTER"
              onClick={handleCounter}
            >
              INCREASE
            </button>
            <button
              className="App__text--white"
              data-type="DECREASE_COUNTER"
              onClick={handleCounter}
            >
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    days: state.days,
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    activeSession: state.activeSession
  };
}
export default connect(
  mapStateToProps,
  { setActiveSessionAC, updateCounter }
)(App);
