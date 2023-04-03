import './App.css';
import DisplayContent from './components/DisplayContent/DisplayContent';
import NavBar from './components/Navbar/navbar';
import MainPage from './components/Homepage/MainPage';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      {/* <DisplayContent/> */}
      {/* <PlaceOrder/> */}
      <Checkout/>
    </div>
  );
}

export default App;
