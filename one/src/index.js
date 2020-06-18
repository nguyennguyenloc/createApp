import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  incrementCounter() {
    this.setState(
      (prevState, props) => ({
        seconds: prevState.seconds + 1
      })
    );
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.incrementCounter(), 1000);
  }
  componentWillMount() {
    clearInterval(this.timeID);
  }
  render() {
    return (
      <div>
        <h1>This hihihaha</h1>
        <h2>Second: {this.state.seconds}</h2>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'));