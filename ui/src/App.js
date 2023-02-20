import './App.css';
import { Component } from 'react';
import Main from './components/Main';
import React from 'react';
import 'react-tabs/style/react-tabs.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { laureates: {}, isLoading: false };
  }

  callApi() {
    const domain = process.env.REACT_APP_API_HOST || '';
    fetch(`${domain}/api/laureate-count?v=1.0&sort=desc`)
      .then((res) => res.json())
      .then(res => {
        this.setState({ laureates: res, isLoading: false });
      })
      .catch((error => error));
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    this.callApi();
  }

  render() {
    const { laureates, isLoading } = this.state;
    if (isLoading) {
      return (<div className='loading'>
        <div className='loader'></div>
      </div>);
    }
    return (
      <div className='App'>
        <Main laureatesCounters={laureates} />
      </div>
    );
  }
}

export default App;
