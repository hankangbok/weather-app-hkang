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
  constructor(props) {
    super(props);
    this.state = {
      weatherDisplay: "DATA DISPLAYED HERE (EVENTUALLY)"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // api.openweathermap.org/data/2.5/weather?q=London
    console.log("HUHUHU");
  }

  async gettheWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7433f086548c39db39d578affe769a25";
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    if (data.cod=="200") {
      console.log(data.cod);
      console.log(data.weather[0].main);
      alert("Your city");
    }
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Please enter a city" />
        <button type="button" onClick={this.gettheWeather}> Enter the location for the weather you want</button>
        <WeatherDisplay value={this.state.weatherDisplay} />
      </form>
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
