import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

class WeatherDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>The current weather is {this.props.weather}</h2>
        <h3>For the city of {this.props.myCity}</h3>
      </div>
    );
  }
}
class ReactionGif extends React.Component {
  constructor(props) {
    super(props);
    let propsweather = this.props.weather;
    this.state = {
      weather: propsweather
    };
    console.log(this.state.weather + "is whats up");
    this.gifButton = this.gifButton.bind(this);
  }
  gifButton(keyword) {
    console.log("Looking for a gif thats descriptive of " + keyword);
    const img = document.querySelector("img");
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=utydx4ZJeUF4Ys1Bdn5Hp8nmF1EqLow6&s=" +
        keyword,
      { mode: "cors" }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
      })
      .catch(function(error) {
        alert("No such Gif");
      });
  }
  handleCityEntry() {
    if (this.state.weather) {
      this.setState({ weather: this.state.weather });
    }
  }
  render() {
    return <img alt="" src={this.gifButton(this.props.weather)} />;
  }
}
// TODO: This class is doing too many things. Decouple it. 
class LocationEntry extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Initialize the page with the current weather for SF
    this.state = {
      weatherDisplay: "chill",
      myCity: "San Francisco"
    };
    this.handleClick = this.handleClick.bind(this);
    this.gettheWeather = this.gettheWeather.bind(this);
    // this.sfWeather = this.sfWeather.bind(this);
    // this.sfWeather();
  }
  handleClick() {
    // api.openweathermap.org/data/2.5/weather?q=London
    console.log("HUHUHU");
  }
  // async sfWeather() {
  //   const url =
  //     "https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&APPID=7433f086548c39db39d578affe769a25";
  //     const response = fetch(url, {mode: "cors" });
  //     const data = await response.json();
  //     const currentSFWeather = data.weather[0].main;
  //     console.log(currentSFWeather);
  //     this.setState({weatherDisplay: currentSFWeather});
  //     return currentSFWeather;
  // }
  async gettheWeather() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7433f086548c39db39d578affe769a25";
    const citySelected = document.getElementById("city-selected").value;
    console.log(citySelected);
    const newURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      citySelected +
      "&APPID=7433f086548c39db39d578affe769a25";
    const whichURL = citySelected === 0 ? url : newURL;
    const response = await fetch(whichURL, { mode: "cors" });
    const data = await response.json();
    if (data.cod === 200) {
      console.log(data.cod);
      const currentWeather = data.weather[0].main;
      const currentCity = data.name;
      console.log(currentWeather);
      console.log(currentCity + "Is the city");
      this.setState({
        weatherDisplay: currentWeather,
        myCity: currentCity
      });
    } else {
      alert("That is not a valid city name");
    }
  }

  render() {
    // TODO: Make it so users can enter by presisng the enter key
    // For now, enter will not submit the data
    const preventReload = function(e) {
      e.preventDefault();
      // this.gettheWeather();
    };
    return (
      <form onSubmit={preventReload}>
        <input
          className='search-bar'
          type="text"
          placeholder="Enter a city name"
          autoFocus="autoFocus"
          id = 'city-selected'
        />
        <button
          className='search-bar'
          type="button"
          onClick={this.gettheWeather}
        >
          {" "}
          Search
        </button>
        <WeatherDisplay
          weather={this.state.weatherDisplay}
          myCity={this.state.myCity}
        />
        <ReactionGif weather={this.state.weatherDisplay} />
      </form>
    );
  }
}

class PrettyHeader extends React.Component {
  render() {
    return <header>Welcome to the<br/> Weather Page!</header>;
  }
}

class TopLevelWeatherApp extends React.Component {
  render() {
    return (
      <div className="top-level-weather-app">
        <PrettyHeader />
        <h1>Enter a city name to see the weather there!</h1>
        <LocationEntry />
      </div>
    );
  }
}

ReactDOM.render(<TopLevelWeatherApp />, document.getElementById("root"));

// ReactDOM.render(<JustTesting />, document.getElementById('root'));
console.log("It's looking like weather time");
