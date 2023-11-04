import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      style: {
        color: '#212529',
        background: '#fff'
      }
    }
  }

  toggleMode = () => {
    console.log(`current mode`, this.state.mode, this.state.style);
    if(this.state.mode === 'light') {
      console.log(`changing mode to dark`);

      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#fff';

      this.setState({
        mode: 'dark',
        style: {
          color: '#fff',
          background: '#212529'
        }
      }, () => {
        console.log(`mode changed`, this.state.mode, this.state.style);
      })

    }
    else {
      console.log(`changing mode to light`);

      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';

      this.setState({
        mode: 'light',
        style: {
          color: '#212529',
          background: '#fff'
        }
      }, () => {
        console.log(`mode changed`, this.state.mode, this.state.style);
      })

    }
  }

  render() {
    return (
      <Router>
        <Navbar title={"NewsApp"} mode={this.state.mode} style={this.state.style} toggleMode={this.toggleMode}/>
        <Routes>
          <Route exact path="/" element={<News key={"general"} type={"general"} mode={this.state.mode} style={this.state.style} />} />
          <Route exact path="/sports" element={<News key={"sports"} type={"sports"} mode={this.state.mode} style={this.state.style}  />} />
          <Route exact path="/technology" element={<News key={"technology"} type={"technology"} mode={this.state.mode} style={this.state.style} />} />
          <Route exact path="/business" element={<News key={"business"} type={"business"} mode={this.state.mode} style={this.state.style} />} />
          <Route exact path="/science" element={<News key={"science"} type={"science"} mode={this.state.mode} style={this.state.style} />} />
        </Routes>
    </Router>
    )
  }
}

export default App