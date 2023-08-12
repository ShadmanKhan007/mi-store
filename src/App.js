import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import data from "./data/data.json";
import Banner from "./components/Banner.jsx";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.jsx"
import HotAccessories from "./components/HotAccessories.jsx"

function App() {
  return (
    <div className="App">
      <Router>
    <PreNavbar />
    <Navbar />
    <Slider  start={data.banner.start} />
    <Offers  offer={data.offer} />
    <Heading text="STAR PRODUCTS"  />
    <StarProduct  starProduct={data.starProduct} />
    <Heading text="HOT ACCESSORIES"  />
    <HotAccessoriesMenu  />

    <Route exact path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       </Route>

       <Route exact path="/smartDevice">
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>

       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>

       <Route exact path="/lifestyle">
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>


       <Route exact path="/mobileAccessories">
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       </Route>


    </Router>
    </div>
  );
}

export default App;
