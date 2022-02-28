import AddEntries from "./Components/AddEntries";
import Entries from "./Components/Entries";
import TotalCalories from "./Components/TotalCalories";


function App() {
  return (
    <div className="App m-5 ">
      <TotalCalories />
      <AddEntries/>
      <Entries/>
    </div>
  );
}

export default App;
