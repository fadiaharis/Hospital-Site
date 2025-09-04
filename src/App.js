import React,{useState} from "react";
import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/app-header";
import PatientLists from "./pages/patient-lists";
import About from "./pages/about";
import Contact from "./pages/contact";
import { ACTIVE_SCREENS } from "./assets/config/app.constants";

function App() {

   const [activeScreen, setActiveScreen] = useState(ACTIVE_SCREENS.PATIENT_DETAILS);

  return (
    <div className="App">
      <AppHeader onMenuSelect={setActiveScreen} />
      <div className="app-body">
        {activeScreen === ACTIVE_SCREENS.PATIENT_DETAILS && <PatientLists />}
        {activeScreen === ACTIVE_SCREENS.ABOUT && <About />}
        {activeScreen === ACTIVE_SCREENS.CONTACT && <Contact />}
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
