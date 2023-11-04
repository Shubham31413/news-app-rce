import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar title={"NewsApp"}/>
        <Routes>
          <Route exact path="/" element={<News key={"general"} type={"general"} />} />
          <Route exact path="/sports" element={<News key={"sports"} type={"sports"}/>} />
          <Route exact path="/technology" element={<News key={"technology"} type={"technology"}/>} />
          <Route exact path="/business" element={<News key={"business"} type={"business"}/>} />
          <Route exact path="/science" element={<News key={"science"} type={"science"}/>} />
        </Routes>
    </Router>
  );
}

export default App;
