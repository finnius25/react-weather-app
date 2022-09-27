import './App.css';
import bg from './assets/bg-img.jpg'

function App() {

  const styles = {
    backgroundImage : `url(${bg})`,
    objectFit : "contain"
  }

  return (
    <div className="App" style={styles}>
      <h1>75℉</h1>
      <h2>Dallas, Texas</h2>
      <h4>clear, sunny</h4>
    </div>
  );
}

export default App;
