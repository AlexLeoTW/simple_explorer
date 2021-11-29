import React from 'react';
import { Component } from 'react';
import BlockTable from './components/BlockTable';

class App extends Component {
  state = { web3: null, latestBlock: NaN, lastUpdate: null, blocks: null }

  constructor(props) {
    super(props);
    this.state.web3 = props.web3;
  }

  render() {
    return (
      <>
        <p>latestBlock = {this.state.latestBlock}</p>
        <ul>
          <BlockTable blocks={this.state.blocks} />
        </ul>
        <p>lastUpdate = {this.state.lastUpdate && this.state.lastUpdate.toLocaleTimeString()}</p>
      </>
    );
  }

  async update() {
    let newBlock = await this.isNewBlock();
    
    if (newBlock) {
      let { blocks } = this.state;
      blocks.unshift(newBlock);
      blocks = [...blocks].slice(0, 10);
      this.setState({
        latestBlock: newBlock.number,
        blocks: blocks
      });
    }
  }

  async isNewBlock() {
    let { web3, latestBlock } = this.state;

    if (!latestBlock) { return false; }

    let nowLatestBlock = await web3.eth.getBlockNumber();
    this.setState({
      lastUpdate: new Date()
    })

    if (!(nowLatestBlock === latestBlock)) {
      let block = await web3.eth.getBlock(nowLatestBlock);
      return block
    } else {
      return false;
    }
  }

  async initState() {
    let { web3 } = this.state;
    let latestBlock = await web3.eth.getBlockNumber();
    let blocks = []

    for (let i=0; i<10; i++){
      let block = await web3.eth.getBlock(latestBlock - i);
      blocks.push(block)
    }

    this.setState({
      latestBlock: latestBlock,
      blocks: blocks,
      lastUpdate: new Date()
    });
  }

  componentDidMount() {
    this.initState()
    this.timerID = setInterval(() => this.update(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default App;
