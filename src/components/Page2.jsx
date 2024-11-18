import { useState } from "react";
import Navbarstu from "./components/Navbarstu";
import Head from "./components/Head";
import "./App.css"; // Optional external stylesheet

const App = () => {
  const [formData, setFormData] = useState({
    bhavan: "",
    block: "",
    floor: "",
    room: "",
    toilet: "",
    request: "",
    category: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Complaint submitted successfully!");
  };

  const getRequestOptions = () => {
    if (!formData.category) {
      return [];
    }

    switch (formData.category) {
      case "Electrical":
        return [
          { value: "Wiring", label: "Wiring" },
          { value: "Appliance Repair", label: "Appliance Repair" },
        ];
      case "Plumbing":
        return [
          { value: "Leak Repair", label: "Leak Repair" },
          { value: "Drain Cleaning", label: "Drain Cleaning" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="hostel-container">
      <Head />
      <Navbarstu />
      <form className="complaint-form" onSubmit={handleSubmit}>
        <h2>Put a Complaint!</h2>
        <div className="form-group">
          <label>Bhavan</label>
          <select
            name="bhavan"
            value={formData.bhavan}
            onChange={handleInputChange}
          >
            <option value="">Select Bhavan</option>
            <option value="Meera Bhavan">Meera Bhavan</option>
          </select>
        </div>
        <div className="form-group">
          <label>Block</label>
          <select
            name="block"
            value={formData.block}
            onChange={handleInputChange}
          >
            <option value="">Select Block</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="Qtr 75">Qtr 75</option>
            <option value="Qtr 76">Qtr 76</option>
            <option value="Qtr 77">Qtr 77</option>
            <option value="Qtr 78">Qtr 78</option>
            <option value="Qtr 79">Qtr 79</option>
            <option value="Qtr 80">Qtr 80</option>
            <option value="Visitor room">Visitor room</option>
            <option value="Common area">Common area</option>
            <option value="Mess">Mess</option>
          </select>
        </div>
        <div className="form-group">
          <label>Floor</label>
          <select
            name="floor"
            value={formData.floor}
            onChange={handleInputChange}
          >
            <option value="">Select Floor</option>
            <option value="Ground">Ground</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Room</label>
          <input
            type="text"
            name="room"
            value={formData.room}
            onChange={handleInputChange}
            placeholder="Enter room number/Common Room"
          />
        </div>
        <div className="form-group">
          <label>Toilet</label>
          <select
            name="toilet"
            value={formData.toilet}
            onChange={handleInputChange}
          >
            <option value="">Select Toilet</option>
            <option value="T1">T1</option>
            <option value="T2">T2</option>
            <option value="T3">T3</option>
            <option value="T4">T4</option>
            <option value="T5">T5</option>
            <option value="T6">T6</option>
            <option value="T7">T7</option>
            <option value="T8">T8</option>
            <option value="T9">T9</option>
            <option value="T10">T10</option>
            <option value="T11">T11</option>
            <option value="T12">T12</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
          </select>
        </div>
        <div className="form-group">
          <label>Request related to</label>
          <select
            name="request"
            value={formData.request}
            onChange={handleInputChange}
            disabled={!formData.category} // Disable until a category is selected
          >
            <option value="">Select Request</option>
            {getRequestOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            placeholder="Write your comments here"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
