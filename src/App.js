import Timer from "./components/Timer";

function App() {
  console.log('Render in App');
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pomodoro App
        </p>
        <Timer />
      </header>
    </div>
  );
}

export default App;
