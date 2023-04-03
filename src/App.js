import './App.css';
import DisplayContent from './components/DisplayContent/DisplayContent';
import NavBar from './components/Navbar/navbar';
import MainPage from './components/Homepage/MainPage';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      {/* <DisplayContent/> */}
      <PlaceOrder/>
    </div>
  );
}

export default App;
