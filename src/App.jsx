import PokeDetail from "./components/PokeDetail";
import TextPoke from "./components/TextPoke";
import BossPoke from "./components/BossPoke";
import BossDetail from "./components/BossDetail";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BossDetail />
      <BossPoke />
      <PokeDetail />
    </div>
  );
}

export default App;
