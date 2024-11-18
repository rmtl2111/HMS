import { useState } from "react";
import Head from "./components/Head";
import Navbarstu from "./components/Navbarstu";
import "./App.css"; // Optional external stylesheet

const App = () => {
  const [complaints] = useState([
    {
      id: 1,
      name: "John Doe",
      bitsId: "2022XXXX",
      block: "A",
      floor: "1",
      room: "101",
      toilet: "Common",
      requirement: "Plumbing",
      time: "10:30 AM",
      category: "Maintenance",
      description: "Leaking tap in the washroom.",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      bitsId: "2023XXXX",
      block: "B",
      floor: "2",
      room: "202",
      toilet: "Attached",
      requirement: "Electrical",
      time: "2:00 PM",
      category: "Repairs",
      description: "Faulty light in the room.",
      status: "Inprocess",
    },
  ]);

  return (
    <div className="complaints-container">
      <Head />
      <Navbarstu />
      <section>
        <div className="Main-text">
          <h2>Previous Complaints</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>BITS ID</th>
              <th>Block</th>
              <th>Floor</th>
              <th>Room</th>
              <th>Toilet</th>
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
                <td>{complaint.name}</td>
                <td>{complaint.bitsId}</td>
                <td>{complaint.block}</td>
                <td>{complaint.floor}</td>
                <td>{complaint.room}</td>
                <td>{complaint.toilet}</td>
                <td>{complaint.requirement}</td>
                <td>{complaint.time}</td>
                <td>{complaint.category}</td>
                <td>{complaint.description}</td>
                <td>{complaint.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;
