import { useState, useContext } from "react";
import { StatusContext } from "../../pages/patient-lists";
import { PATIENT_STATUS } from "../../assets/config/app.constants";
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
        className={status === PATIENT_STATUS.IN_TREATMENT ? "active" : ""}
        onClick={() => setStatus(PATIENT_STATUS.IN_TREATMENT)}
      >
        In Treatment
      </span>
      <span
        className={status === PATIENT_STATUS.RECOVERED ? "active" : ""}
        onClick={() => setStatus(PATIENT_STATUS.RECOVERED)}
      >
        Recovered
      </span>
    </div>
  );
};

export default PatientStatus;
