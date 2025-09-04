import React,{useState} from "react";
import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/app-header";
import PatientLists from "./pages/patient-lists";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {

   const [activeScreen, setActiveScreen] = useState("Patient Details");

  return (
    <div className="App">
      <AppHeader onMenuSelect={setActiveScreen} />
      <div className="app-body">
        {activeScreen === "Patient Details" && <PatientLists />}
        {activeScreen === "About Us" && <About />}
        {activeScreen === "Contact" && <Contact />}
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
