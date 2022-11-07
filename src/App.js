import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import CardComp from './components/CardComp';


function App() {
  return (
    <div className="App">
      <NavbarComp /> 
      <br/><br/>
      <CardComp />
      <br/>
      <CardComp />
      <br/>
      <CardComp />
      </div>
   
  );
}

export default App;
