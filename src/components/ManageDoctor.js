import React, { Component } from "react";
import { ref, onValue, push, remove, set } from "firebase/database";
import "./ManageDoctor.css";
import initializeFirebase from "../Firebase/index";

const { database } = initializeFirebase();

class ManageDoctor extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
      newRecord: {
        ContactInfo: "",
        DoctorId: "",
        DoctorEmail: "",
        ReportId: "",
        DoctorImg: "",
      },
    };
  }

  componentDidMount() {
    const databaseRef = ref(database, "doctor");
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
    const databaseRef = ref(database, "doctor");
    push(databaseRef, this.state.newRecord); // Push the new record to Firebase
    this.setState({
      newRecord: {
        DoctorName: "",
        ContactInfo: "",
        DoctorId: "",
        DoctorEmail: "",
        ReportId: "",
        DoctorImg: "",
      },
      selectedRecordKey: null,
    });
  };

  handleDeleteRecord = (key) => {
    const databaseRef = ref(database, `doctor/${key}`);
    remove(databaseRef); // Remove the record from Firebase
  };
  handleEditRecord = (key) => {
    // Set the selectedRecordKey when the "Edit" button is clicked
    this.setState({ selectedRecordKey: key });

    // Fetch the data of the selected record from Firebase
    const selectedRecordRef = ref(database, `doctor/${key}`);
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
        ContactInfo: "",
        DoctorId: "",
        DoctorEmail: "",
        ReportId: "",
        DoctorImg: "",
        DoctorName: "",
      },
    });
  };

  handleSaveEdit = () => {
    // Update the record in Firebase based on the selectedRecordKey
    const selectedRecordRef = ref(database, `doctor/${this.state.selectedRecordKey}`);
    set(selectedRecordRef, this.state.newRecord); // Use set() to update the data in Firebase
    this.handleCancelEdit(); // Clear the selectedRecordKey and reset the input fields
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            color: "#333",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Manage Doctor
        </h1>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Doctor Name
                </th>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Contact Info
                </th>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Doctor ID
                </th>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Doctor Email
                </th>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Report ID
                </th>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Doctor Image
                </th>
                <th
                  style={{
                    padding: "15px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((row, index) => (
                <tr key={row.key}>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    {row.data.DoctorName}
                  </td>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    {row.data.ContactInfo}
                  </td>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    {row.data.DoctorId}
                  </td>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    {row.data.DoctorEmail}
                  </td>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    {row.data.ReportId}
                  </td>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    <img
                      src={row.data.DoctorImg}
                      alt="Doctor"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </td>
                  <td
                    style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
                  >
                    <button
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
                      onClick={() => this.handleEditRecord(row.key)}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#f44336",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={() => this.handleDeleteRecord(row.key)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    name="DoctorName"
                    value={this.state.newRecord.DoctorName}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    name="ContactInfo"
                    value={this.state.newRecord.ContactInfo}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    name="DoctorId"
                    value={this.state.newRecord.DoctorId}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    name="DoctorEmail"
                    value={this.state.newRecord.DoctorEmail}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    name="ReportId"
                    value={this.state.newRecord.ReportId}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    name="DoctorImg"
                    value={this.state.newRecord.DoctorImg}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  {this.state.selectedRecordKey ? (
                    <div>
                      <button
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#ff9800",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          marginRight: "5px",
                        }}
                        onClick={this.handleSaveEdit}
                      >
                        Save Edit
                      </button>
                      <button
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#ccc",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={this.handleCancelEdit}
                      >
                        Cancel Edit
                      </button>
                    </div>
                  ) : (
                    <button
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#2196f3",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={this.handleAddRecord}
                    >
                      Add
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ManageDoctor;
