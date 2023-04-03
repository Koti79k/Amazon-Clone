import './App.css';
import DisplayContent from './components/DisplayContent/DisplayContent';
import NavBar from './components/Navbar/navbar';
import MainPage from './components/Homepage/MainPage';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; //v5.reactrouter.com/web/guides/quick-start



function App() { 
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/display">{<DisplayContent />}</Route>
          <Route path="/order">{<PlaceOrder />}</Route>
          <Route path="/checkout">{<Checkout />}</Route>
          <Route path="">{<MainPage />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
