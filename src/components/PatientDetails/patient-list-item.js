import React from "react";
import PatientStatus from "./patient-status";
import './patient-list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item">
      <div className="patient-name">{props.name}</div>
      <div className="patient-summary">{props.summary}</div>
      <PatientStatus status={props.status} />
      <button className="dlt-patient-record-btn" onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default ListItem;
