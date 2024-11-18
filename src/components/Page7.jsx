import { useState } from "react";
import HeadEMS from "./components/HeadEMS";
import Navbarplain from "./components/Navbarplain";
import "./App.css"; // Optional external stylesheet

const App = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      requirement: "Plumbing",
      time: "10:30 AM",
      category: "Maintenance",
      description: "Leaking tap in the washroom.",
    },
    {
      id: 2,
      requirement: "Electrical",
      time: "2:00 PM",
      category: "Repairs",
      description: "Faulty light in the room.",
    },
  ]);
  const handleApprove = (id) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: "Approved" } : complaint
      )
    );
  };

  return (
    <div className="complaints-container">
      <HeadEMS />
      <Navbarplain />
      <section>
        <div className="Main-text">
          <h2>Active Complaints</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Bhavan</th>
              <th>Requirement</th>
              <th>Time</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr key={complaint.id}>
                <td>{index + 1}</td>
                <td>{complaint.Bhavan}</td>
                <td>{complaint.requirement}</td>
                <td>{complaint.time}</td>
                <td>{complaint.category}</td>
                <td>{complaint.description}</td>
                <td>
                  {complaint.status === "Approved" ? (
                    "Approved"
                  ) : (
                    <button onClick={() => handleApprove(complaint.id)}>
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button onClick={() => console.log("Print receipt")}>
            Print Receipt
          </button>
          <select
            className="dropdown"
            onChange={(e) => console.log(`Selected Sr. No: ${e.target.value}`)}
          >
            <option value="">Select Sr. No</option>
            {complaints.map((complaint, index) => (
              <option key={complaint.id} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
};

export default App;
