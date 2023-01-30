import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Blog from './Components/Blog/Blog';
import Contract from './Components/Contract/Contract';
import Department from './Components/Depertment/Department';
import Cardiology from './Components/Doctor/Cardiology';
import Dental from './Components/Doctor/Dental';
import Doctor from './Components/Doctor/Doctor';
import Medicine from './Components/Doctor/Medicine';
import Neurology from './Components/Doctor/Neurology';
import Orthopadic from './Components/Doctor/Orthopadic';
import Pediatric from './Components/Doctor/Pediatric';
import Tramualogy from './Components/Doctor/Tramualogy';
import Footer from './Components/Home/Footer';
import Footer1 from './Components/Home/Footer1';
import Home from './Components/Home/Home';
import Nav from './Components/Nav';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <Routes>
     <Route path='/'element={<Home></Home>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/appointment'element={<Appointment></Appointment>}></Route>
      <Route path='/contract'element={<Contract></Contract>}></Route>
      <Route path='/service'element={<Service></Service>}></Route>
      <Route path='/department'element={<Department></Department>}></Route>
      <Route path='/blog'element={<Blog></Blog>}></Route>
      <Route path='/doctor'element={<Doctor></Doctor>}></Route>
      <Route path='/medicine'element={<Medicine></Medicine>}></Route>
      <Route path='/dental'element={<Dental></Dental>}></Route>
      <Route path='/neurology'element={<Neurology></Neurology>}></Route>
      <Route path='/cardiology'element={<Cardiology></Cardiology>}></Route>
      <Route path='/pediatric'element={<Pediatric></Pediatric>}></Route>
      <Route path='/traumatology'element={<Tramualogy></Tramualogy>}></Route>
      <Route path='/orthopadic'element={<Orthopadic></Orthopadic>}></Route>
     </Routes>
     <Footer1></Footer1>
     <Footer></Footer>
    </div>
  );
}

export default App;
