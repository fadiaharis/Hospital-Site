import React, { useState } from "react";
import Filter from "../components/Filter/Filter";
import ListItem from "../components/PatientDetails/patient-list-item";
import "../components/PatientDetails/patient-list.css";
import SearchPatient from "../components/PatientDetails/search-patient";

const StatusContext = React.createContext();

const PatientLists = () => {
  let initialPatients = [
    {
      id: 1,
      name: "John Doe",
      summary: "Diagnosed with Fever",
      status: "InTreatment",
    },
    {
      id: 2,
      name: "Jane Smith",
      summary: "Recovered from Surgery",
      status: "Recovered",
    },
    {
      id: 3,
      name: "Alice Johnson",
      summary: "Undergoing Treatment",
      status: "InTreatment",
    },
  ];

  const [patientsData, setPatientsData] = useState(initialPatients);
  const [showStatus, setShowStatus] = useState(false);

  const onFilterChange = (filterValue) => {
    if (filterValue === "All") {
      setPatientsData(initialPatients);
    } else {
      const filteredPatients = initialPatients.filter(
        (patient) => patient.status === filterValue
      );
      setPatientsData(filteredPatients);
    }
  };

  const onDeletePatient = (id) => {
    const updatedPatients = patientsData.filter((patient) => patient.id !== id);
    setPatientsData(updatedPatients);
  };

  return (
    <div className="patient-list">
      <div className="list-header">
        <h2>Patient Details</h2>
      </div>
      <SearchPatient />

      <div className="filter-container">
        <Filter onFilterAction={onFilterChange} />

        <label>
          Show patient statuses{" "}
          <input
            type="checkbox"
            onChange={(e) => setShowStatus(e.target.checked)}
          />
        </label>
      </div>

      <StatusContext.Provider value={showStatus}>
        {patientsData.map((patient) => (
          <ListItem
            key={patient.id}
            name={patient.name}
            summary={patient.summary}
            status={patient.status}
            onDelete={() => onDeletePatient(patient.id)}
          />
        ))}
      </StatusContext.Provider>
      <div className="patient-count">Total Patients: {patientsData.length}</div>
    </div>
  );
};

export default PatientLists;
export { StatusContext };
