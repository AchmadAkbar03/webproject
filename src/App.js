import logo from './logo.svg';
import './App.css';
import mataelang from './img/mataelang.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mataelang} className="App-logo" alt="mataelang" />
        <p>
          Achmad <code>Akbar</code>
        </p>
        <p>IBM CORPORATION</p>
        <a
          className="App-link"
          href="https://www.instagram.com/achmadakbarr_3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </header>
    </div>
  );
}

export default App;
