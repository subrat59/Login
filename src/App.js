import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className='top'>
          <img className="image" src="https://app.pinata.cloud/Pinnie.306e34e4710467a7d0447d9aeeb02802.svg"></img>
          <h1>Welcome to AGMA!</h1>
          <h4>The easiest way to upload and distribute files on IPFS.Agma powers those building the future of web3.</h4>
        </div>
        <div className='down'>
          <div className='downcont'>
          <h1>Log in</h1>
          <h5>Email</h5>
          <input className="input"></input>
          <button className="btn">Next</button>
          </div>

        </div>
      </div>
      <div className="side">
        <div className= "wrapper">
          <img src = "https://app.pinata.cloud/b87ddf5b11c9bab4.png" className = "sideimg" />
          </div>
      </div>
    </div>
  );
}

export default App;
