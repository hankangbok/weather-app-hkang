import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
class JustTesting extends React.Component {
  render() {
    return <h1>THIS IS A TEST</h1>;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<JustTesting />, document.getElementById('root'));
console.log("It's looking like weather time");
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
