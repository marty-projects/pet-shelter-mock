import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "../components/NavbarComp";
import PetList from './pet-list';

export default function Root() {
    return (
        <>
    <div className="app">
      <NavbarComp /> 
      <br/><br/>
      <PetList />
      <br/>
    </div>
   
        </>
    )
}