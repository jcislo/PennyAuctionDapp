import React from 'react';
import logo from './logo.svg';
import Web3 from 'web3';
import './App.css';
import { pennyAuction } from './abi/auctionAbi'

class App extends React.Component {

  state = {
    wallet: "",
    web3: false,
    web3Object: {},
    auctionContract: {},
    registered: false,
    item1: 0,
    item2: 0,
    item3: 0
    
  }

  setupWeb3 = () => {
    const self = this;
    let defaultAccount = ""; 
    const web3 = new Web3(window.web3.currentProvider);
    console.log(web3);
    this.setState({ web3Object: web3 });
    window.ethereum.enable().then((account) => {
      let num = 5777;
      //console.log(account);
      defaultAccount = account[0];
      //console.log(defaultAccount);
      self.setState({ wallet: defaultAccount });
      web3.eth.defaultAccount = defaultAccount;
      //console.log(this.state.wallet);

      const contractInst = new web3.eth.Contract(pennyAuction.abi);
      
      //console.log(dustAbi);
      //console.log(Fusion.networks[num].address);
      contractInst.options.address = pennyAuction.networks[num].address;
      //dustContract.options.address = dustAbi.networks[num].address;
      this.setState({ auctionContract: contractInst });
      console.log(contractInst);
      this.setState({ web3: true });
      //console.log(Fusion);
        
        
    });
    
    
      
  }

  componentDidMount = () => {
    if (typeof web3 !== 'undefined') {
      this.setupWeb3();
      //console.log(web3);
      //const web3js = new Web3(web3.currentProvider);
    } else {
      this.setState({ web3: false });
      console.log("false");
      const web3 = new Web3("HTTP://127.0.0.1:7545");
      this.setState({ web3Object: web3 });
      console.log(this.state.web3Object);
      // Handle the case where the user doesn't have web3. Probably
      // show them a message telling them to install Metamask in
      // order to use our app.
    }
  }

  register = () => {
    let contract = this.state.auctionContract;
    const self = this;
    const wallet = this.state.wallet;
    contract.methods.register().send({ from: wallet}, (err, result) => {
      console.log(err);
      console.log(result);
      self.setState({ registered: true })
    });
  }

  bidItem1 = () => {
    let contract = this.state.auctionContract;
    const self = this;
    const wallet = this.state.wallet;
    contract.methods.bid(0, 1).send({ from: wallet}, (err, result) => {
      console.log(err);
      console.log(result);
      let bids = self.state.item1;
      bids += 1;
      self.setState({ item1: bids });
    });
  }

  bidItem2 = () => {
    let contract = this.state.auctionContract;
    const self = this;
    const wallet = this.state.wallet;
    contract.methods.bid(1, 1).send({ from: wallet}, (err, result) => {
      console.log(err);
      console.log(result);
      let bids = self.state.item2;
      bids += 1;
      self.setState({ item2: bids });
    });
  }

  bidItem3 = () => {
    let contract = this.state.auctionContract;
    const self = this;
    const wallet = this.state.wallet;
    contract.methods.bid(2, 1).send({ from: wallet}, (err, result) => {
      console.log(err);
      console.log(result);
      let bids = self.state.item3;
      bids += 1;
      self.setState({ item3: bids });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Welcome to the PENNY AUCTION!!!</div>
          {this.state.registered ? <p>You are registered </p> : <p>You are not registered</p>}
          <button onClick={this.register}>Register</button>
          <div>
            <button onClick={this.bidItem1}>item 1</button>
            <button onClick={this.bidItem2}>item 2</button>
            <button onClick={this.bidItem3}>item 3</button>
          </div>
          <div>item 1 bids: {this.state.item1}</div>
          <div>item 2 bids: {this.state.item2}</div>
          <div>item 3 bids: {this.state.item3}</div>
        </header>
      </div>
    );
  }
}

export default App;
