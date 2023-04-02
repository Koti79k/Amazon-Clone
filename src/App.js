import './App.css';
import DisplayContent from './components/DisplayContent/DisplayContent';
import NavBar from './components/Navbar/navbar';
import MainPage from './components/homepage/main_page';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      <DisplayContent/>
    </div>
  );
}

export default App;
