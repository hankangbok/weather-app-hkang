import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



class WeatherDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>This is where the returned data from the weather API will go</h2>
      </div>
    );
  }
}
class LocationEntry extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Please enter a city" />
        <button type="button"> Enter the location for the weather you want</button>
        <WeatherDisplay />
      </div>
    );
  }
}

class PrettyHeader extends React.Component {
  render() {
    return (
      <header>Welcome to the Weather Page!</header> 
    );
  }
}

class TopLevelWeatherApp extends React.Component {
  render() {
    return (
      <div className="top-level-weather-app">
        <PrettyHeader /> 
        <h1>This is the top level of the Weather App</h1>
        <LocationEntry />
      </div>
    );
  }
}

ReactDOM.render((
  <TopLevelWeatherApp />
  ), document.getElementById('root'));

// ReactDOM.render(<JustTesting />, document.getElementById('root'));
console.log("It's looking like weather time");
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
