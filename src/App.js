import Doctor from './components/Doctor';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import AboutUS from "./components/AboutUs";
import News from './components/News';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import ManageAppointment from './components/ManageAppointment';
import ManageDoctor from './components/ManageDoctor';
import './App.css';
import { AuthContextProvider } from "../src/context/AuthContextGoogle";
import SignIn from './components/signIn';
import Protected from "./context/Protected";
import Register from './components/Register';
import BookEvent from './components/BookEvent';
function App() {
  return (

    <BrowserRouter>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
    <Route
            path="/appointment"
            element={
              <Protected>
                <Appointment />
              </Protected>
            }
          />
      <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<AboutUS />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="manageappointment" element={<ManageAppointment />} />
        <Route path="managedoctor" element={<ManageDoctor />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="Register" element={<Register />} />
        <Route path="bookevent" element={<BookEvent />} />
    </Routes>
    </AuthContextProvider>
  </BrowserRouter>
  
  );
}

export default App;
