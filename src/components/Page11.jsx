import Navbarstu from "./components/Navbarstu";
import Head from "./components/Head";
import "./App.css"; // External CSS file for styling (optional)

const App = () => {
  const faculty = {
    name: "XYZ",
    designation: "Faculty Incharge",
    email: "xyz@gmail.com",
    phone: "7023714156",
  };

  const studentManager = {
    name: "XYZ",
    designation: "Student Manager",
    email: "xyz@gmail.com",
    phone: "7023714156",
  };

  return (
    <div className="team-info-container">
      <Head />
      <Navbarstu />
      <section className="team-section">
        <div className="faculty">
          <h2 className="section-header">Faculty Incharge</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Email/Phone No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{faculty.name}</td>
                <td>{faculty.designation}</td>
                <td>
                  {faculty.email}
                  <br />
                  {faculty.phone}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="student-manager">
          <h2 className="section-header">Student Manager</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Email/Phone No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{studentManager.name}</td>
                <td>{studentManager.designation}</td>
                <td>
                  {studentManager.email}
                  <br />
                  {studentManager.phone}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default App;
