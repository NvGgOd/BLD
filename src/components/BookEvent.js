import React, { Component } from "react";
import { ref, onValue, push, remove, set } from "firebase/database";
import initializeFirebase from "../Firebase/index";
import { Link, unstable_HistoryRouter, useParams } from "react-router-dom";
const { database } = initializeFirebase();
class BookEvent extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
      newRecord: {
        doctorName: "",
        contactInfo: "",
        date: "",
        eventInfo: "",
        eventContent: "",
        time: "",
        screeningTest: "noScreening",
      },
    };
  }

  componentDidMount() {
    const databaseRef = ref(database, "events");
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

  render() {
    return (
      
      <div className="manage-appointment-container">
        
        <h1 className="page-title">Event Schedule</h1>
        <div className="table-container">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Event Info</th>
                <th>Contact Info</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((row, index) => (
                <tr key={row.key}>
                  <td>{row.data.eventInfo}</td>
                  <td>{row.data.contactInfo}</td>
                  <td>{row.data.date}</td>

                  <td>{row.data.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          to="/appointment" 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        style={{marginTop:32}}>
          
          Back
        </Link>
      </div>
      
    );
  }
}

export default BookEvent;
