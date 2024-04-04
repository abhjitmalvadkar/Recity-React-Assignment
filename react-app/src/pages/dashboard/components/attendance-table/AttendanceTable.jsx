import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

import "./AttendanceTable.css";

const AttendanceTable = ({ title, data = []}) => {
  return (
    <div className="extra-wrapper">
      <div className="attendance-table-wrapper">
        <table className="attendance-table-content">
          <thead>
          <tr className="attendance-table-heading">
            <th className="text-left px-5">Staff</th>
            <th className="text-center">Present</th>
            <th className="text-center">Absent</th>
          </tr>
          </thead>
          <tbody className="table-body">
          {data.map((row, index) => (
            <tr className="each-attendance-row"
                key={index}>
              <td className="text-left px-5">{row.Name}</td>
              <td className="text-center">{row.Present ? <FaCheck className="check"/> : ""}</td>
              <td className="text-center">{row.Present ? "" : <FaTimes className="cross"/>}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  
  );
};

export default AttendanceTable;
