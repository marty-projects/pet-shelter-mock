import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import PetList from './components/PetList';


function App() {
  return (
    <div className="App">
      <NavbarComp /> 
      <br/><br/>
      <PetList />
      <br/>
      </div>
   
  );
}

export default App;
