import "./App.css";
import Personaldetails from "./components/Personaldetails";
import { BrowserRouter as Router, Route,  Routes, Link } from "react-router-dom";
import Identity from "./components/Identity";
import WorkExperience from "./components/WorkExperience";
import HomePage from "./Page/HomePage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/personaldetails" element={<Personaldetails />} />
        <Route exact path="/identity" element={<Identity />} />
        <Route exact path="/workexperience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
