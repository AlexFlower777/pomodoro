import Timer from "./components/Timer/Timer";
import './style.css'

function App() {
  console.log('Render in App');

  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
}

export default App;
