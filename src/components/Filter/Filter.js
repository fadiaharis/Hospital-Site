import React from "react";
import './Filter.css'

const Filter = (props) => {
  return (
    <div className="filter">
      <select onChange={(e) => props.onFilterAction(e.target.value)}>
        <option value="All">All Patients</option>
        <option value="InTreatment">In Treatment</option>
        <option value="Recovered">Recovered</option>
      </select>
    </div>
  );
};

export default Filter;
