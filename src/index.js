import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";

class WeatherDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>The current weather is {this.props.value}</h2>
        <h3>For the city of {this.props.maCity}</h3> 
      </div>
    );
  }
}
class LocationEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDisplay: "DATA DISPLAYED HERE (EVENTUALLY)",
      maCity:"Not Picked Yet"
    };
    this.handleClick = this.handleClick.bind(this);
    this.gettheWeather = this.gettheWeather.bind(this);
  }
  handleClick() {
    // api.openweathermap.org/data/2.5/weather?q=London
    console.log("HUHUHU");
  }

  async gettheWeather() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7433f086548c39db39d578affe769a25";
    const citySelected = document.getElementById("city-selected").value;

    const newUrl= "https://api.openweathermap.org/data/2.5/weather?q="+
      +citySelected
      +"&APPID=7433f086548c39db39d578affe769a25";
    const response = await fetch(newUrl, { mode: "cors" });
    const data = await response.json();
    if (data.cod == "200") {
      console.log(data.cod);
      console.log(data.weather[0].main);
      const currentWeather = data.weather[0].main;
      console.log(currentWeather);
      this.setState({
        weatherDisplay: currentWeather,
        maCity:data.name
      });
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Please enter a city name"
          id="city-selected"
        />
        <button type="button" onClick={this.gettheWeather}>
          {" "}
          Enter the location for the weather you want
        </button>
        <WeatherDisplay value={this.state.weatherDisplay} maCity={this.state.maCity} />
      </form>
    );
  }
}

class PrettyHeader extends React.Component {
  render() {
    return <header>Welcome to the Weather Page!</header>;
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

ReactDOM.render(<TopLevelWeatherApp />, document.getElementById("root"));

// ReactDOM.render(<JustTesting />, document.getElementById('root'));
console.log("It's looking like weather time");
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
