import { useState, useContext } from "react";
import { StatusContext } from "../../pages/patient-lists";
import "./patient-status.css";

const PatientStatus = (props) => {
  const [status, setStatus] = useState(props.status);
  const showStatus = useContext(StatusContext);
  if (showStatus === false) {
    return null;
  }
  return (
    <div className="patient-status">
      <span
        className={status === "InTreatment" ? "active" : ""}
        onClick={() => setStatus("InTreatment")}
      >
        In Treatment
      </span>
      <span
        className={status === "Recovered" ? "active" : ""}
        onClick={() => setStatus("Recovered")}
      >
        Recovered
      </span>
    </div>
  );
};

export default PatientStatus;
