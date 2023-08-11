import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import data from "./data/data.json";
import Banner from "./components/Banner.jsx";

function App() {
  return (
    <div className="App">
    <PreNavbar />
    <Navbar />
    <Slider  start={data.banner.start} />
    </div>
  );
}

export default App;
