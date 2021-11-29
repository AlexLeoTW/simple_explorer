import React from 'react';
import { Component } from 'react';

class App extends Component {
  state = { web3: null, latestBlock: NaN, lastUpdate: new Date(0) }

  constructor(props) {
    super(props);
    this.state.web3 = props.web3;
  }

  render() {
    return (
      <React.Fragment>
        <p>latestBlock = {this.state.latestBlock}</p>
        <p>lastUpdate = {this.state.lastUpdate.toLocaleTimeString()}</p>
      </React.Fragment>
    );
  }

  async readBlockNumber() {
    let { web3 } = this.state;
    let latestBlock = await web3.eth.getBlockNumber();
    this.setState({
      latestBlock: latestBlock,
      lastUpdate: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.readBlockNumber(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default App;
