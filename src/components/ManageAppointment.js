import React, { Component } from "react";
import { ref, onValue, push, remove, set } from "firebase/database";
import initializeFirebase from "../Firebase/index";
import "./ManageAppointment.css";
const { database } = initializeFirebase();
class ManageAppointment extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
      newRecord: {
        name: "",
        gender: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        screeningTest: "noScreening",
      },
    };
  }

  componentDidMount() {
    const databaseRef = ref(database, "appointment"); 
    onValue(databaseRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        data.DoctorId = keyName;
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newRecord: {
        ...prevState.newRecord,
        [name]: value,
      },
    }));
  };

  handleAddRecord = () => {
    const databaseRef = ref(database, "appointment");
    push(databaseRef, this.state.newRecord); // Push the new record to Firebase
    this.setState({
      newRecord: {
        name: "",
        gender: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        screeningTest: "noScreening",
      },
      selectedRecordKey: null,
    });
  };
  handleDeleteRecord = (key) => {
    const databaseRef = ref(database, `appointment/${key}`);
    remove(databaseRef); // Remove the record from Firebase
  };
  handleEditRecord = (key) => {
    // Set the selectedRecordKey when the "Edit" button is clicked
    this.setState({ selectedRecordKey: key });

    // Fetch the data of the selected record from Firebase
    const selectedRecordRef = ref(database, `appointment/${key}`);
    onValue(selectedRecordRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({ newRecord: { ...data } });
    });
  };

  handleCancelEdit = () => {
    // Clear the selectedRecordKey and reset the input fields
    this.setState({
      selectedRecordKey: null,
      newRecord: {
        name: "",
        gender: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        screeningTest: "noScreening",
      },
    });
  };

  handleSaveEdit = () => {
    // Update the record in Firebase based on the selectedRecordKey
    const selectedRecordRef = ref(
      database,
      `appointment/${this.state.selectedRecordKey}`
    );
    set(selectedRecordRef, this.state.newRecord); // Use set() to update the data in Firebase
    this.handleCancelEdit(); // Clear the selectedRecordKey and reset the input fields
  };
  render() {
    return (
      <div className="manage-appointment-container">
        <h1 className="page-title">Manage Appointment</h1>
        <div className="table-container">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Email</th>
                <th>Contact Info</th>
                <th>Screening Test</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((row, index) => (
                <tr key={row.key}>
                  <td>{row.data.name}</td>
                  <td>{row.data.gender}</td>
                  <td>{row.data.date}</td>
                  <td>{row.data.time}</td>
                  <td>{row.data.email}</td>
                  <td>{row.data.phone}</td>
                  <td>{row.data.screeningTest}</td>
                  <td>
                    <button
                      onClick={() => this.handleEditRecord(row.key)}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#4caf50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.handleDeleteRecord(row.key)}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#f44336",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={this.state.newRecord.name}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Gender"
                    value={this.state.newRecord.gender}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Date"
                    value={this.state.newRecord.date}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Time"
                    value={this.state.newRecord.time}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Email"
                    value={this.state.newRecord.email}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ContactInfo"
                    value={this.state.newRecord.phone}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ScreeningTest"
                    value={this.state.newRecord.screeningTest}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <td className="action-buttons">
                    {/* Conditional rendering of buttons */}
                    {this.state.selectedRecordKey ? (
                      <>
                        <button onClick={this.handleSaveEdit} style={{
                        padding: "8px 12px",
                        backgroundColor: "#589",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}>Save Edit</button>
                        <button onClick={this.handleCancelEdit} style={{
                        padding: "8px 12px",
                        backgroundColor: "#577",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}>
                          Cancel Edit
                        </button>
                      </>
                    ) : (
                      <button onClick={this.handleAddRecord} style={{
                        padding: "8px 12px",
                        backgroundColor: "#f55315",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}>Add</button>
                    )}
                  </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ManageAppointment;
