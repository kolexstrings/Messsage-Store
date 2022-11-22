import React, { useState } from 'react';
import Web3 from 'web3';
import './App.css';

import messageStore from '../../../smart_contract/build/contracts/messageStore.json';
import { useEffect } from 'react';

const App = () => {

const loadWeb3 = async() => {

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert('Install MetaMask');
  }

}

const [account, setAccount] = useState('');
const [messageStore, setMessage] = useState(null);
const [loading, setLoading] = useState (true);

const loadBlockChain = async() => {
  const web3 = windows.web3;
  const account = await web3.eth.getAccounts();
  setAccount(account[0]);

  const networkId = await web3.eth.net.getId();

  const networkData = messageStore.networks[networkId];

  if (networkData) {

    const messageStore = new web3.eth.Contract (
      messageStore.abi, networkData.address
    );

    setMessage();
    getMessage();

    setLoading(false);

  } else {
    window.alert('Message Store contract not deployed to that network');
  }
}

useEffect(()=> {
  loadWeb3();
  loadBlockChain();
})

  return (
    <div>

      {/* { loading ? (
        <p>Loading</p>
      ) : (
        <p>Loaded!</p>
      )}
      <h1>I am ready</h1> */}
      <Dapp />
    </div>
  );
}

const Dapp = () => {
  return (
    <div>
      <div className="container">
        <div className="title">

          <div>
          <h1>Message Store App</h1>
          <h4>Store Encrypted Messages In One Click</h4>
          </div>

          <div className='connect'>
            <div>
              <button className='connectButton'>Connct Wallet</button>
              </div>
          </div>

        </div>

        <div className="main">

          <h4>Current Message:</h4>
          <p>Make sure you are connected to network</p>
          <hr></hr>

          <h4>New Message:</h4>
          <form>
            <textarea className='input' id="messageInput" placeholder="Type in your message" name="messageInput"/>
          </form>

          <button className='update-button'>Update</button>
          
        </div>

        
          
      </div>
    </div>
  );
  
}

export default App
