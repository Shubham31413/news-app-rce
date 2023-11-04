import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'

function App() {
  return (
    <>
      <Navbar title={"News App"}/>
      <News />
    </>
  );
}

export default App;
