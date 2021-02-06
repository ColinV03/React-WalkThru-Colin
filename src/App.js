import "./App.css";
import StateTracker from "./Comps/State_Tracker";

function App() {
  return (
    <div>
      <StateTracker person={"Colin"} />
      <br></br>
      <StateTracker person={"Not Colin"} />
    </div>
  );
}

export default App;
