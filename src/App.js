
import './App.css';
import Player from './Player'
import bgVideo from './Caves.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <video autoPlay loop muted style=
          {{
            position : "absolute",
            width : "100%",
            height : "100%",
            objectFit : "cover",
            zIndex : "-1" 
          }}>
            <source src={bgVideo} type="video/mp4"/>
          </video>
          <Player />
      </header>
    </div>
  );
}

export default App;
