import './App.scss';
import Referralprogram from './pages/referral-program';
import Header from './shared-components/header';

function App() {
  return (
    <div className="layout">
      <Header></Header>
      <Referralprogram></Referralprogram>
    </div>
  );
}

export default App;


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}