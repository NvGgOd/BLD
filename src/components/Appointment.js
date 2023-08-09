import React from "react";
import { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import initializeFirebase from "../Firebase/index"; // Update the path to your firebaseConfig.js file
import { Link, unstable_HistoryRouter, useParams } from "react-router-dom";
// import "./Appointment.css";
const { database } = initializeFirebase();
const Appointment = () => {
  const [events, setEvents] = useState([]);
  const [eventFormData, setEventFormData] = useState({
    doctorName: "",
    contactInfo: "",
    date: "",
    eventInfo: "",
    eventContent: "",
    time: "",
    screeningTest: "noScreening",
  });

  const [appointmentFormData, setAppointmentFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    screeningTest: "noScreening",
  }); // Function to handle event form submission

  const handleEventFormSubmit = (e) => {
    e.preventDefault();
    const eventsRef = ref(database, "events");
    push(eventsRef, eventFormData).then(() => {
      setEventFormData({
        doctorName: "",
        contactInfo: "",
        date: "",
        eventContent: "",
        eventInfo: "",
        time: "",
      });
    });
  }; // Function to handle appointment form submission

  const handleAppointmentFormSubmit = (e) => {
    e.preventDefault();
    const appointmentRef = ref(database, "appointment");
    push(appointmentRef, appointmentFormData).then(() => {
      setAppointmentFormData({
        name: "",
        gender: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        screeningTest: "",
      });
    });
  };

  const handleEventFormChange = (e) => {
    setEventFormData({
      ...eventFormData,
      [e.target.name]: e.target.value,
    });
  }; // Function to handle form field changes for appointments

  const handleAppointmentFormChange = (e) => {
    setAppointmentFormData({
      ...appointmentFormData,
      [e.target.name]: e.target.value,
    });
  }; // Function to handle real-time updates of events

  useEffect(() => {
    const eventsRef = ref(database, "events");
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEvents(Object.values(data));
      }
    });
  }, []);
  const handleScrollToForm = () => {
    const formElement = document.getElementById("appointmentForm");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden bg-[#fcfefe] flex flex-col justify-between gap-[578px] w-full">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <div className="bg-[#fcfefe] flex flex-row justify-between h-20 shrink-0 items-center px-48">
            <div className="text-4xl font-['Yeseva_One'] uppercase text-[#1f2b6c]">
              Med<div className="text-[#159eec] contents">dical</div>
            </div>
            <div className="flex flex-row justify-between w-3/5 items-center">
              <div className="flex flex-row gap-1 items-center">
                <img
                  src="https://file.rendit.io/n/dW4sX7J95BhGio2WQPhP.svg"
                  className="min-h-0 min-w-0 w-10 shrink-0"
                />
                <div className="flex flex-col mb-px gap-px w-[140px]">
                  <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] mr-10">
                    Emergency
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                    (237) 681-812-255
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/FvuKt44pf2HM66sNeeRg.svg"
                  className="min-h-0 min-w-0 w-8 shrink-0"
                />
                <div className="flex flex-col gap-px w-48">
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-1/2">
                    Work Hour
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                    09:00 - 20:00 Everyday
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/cAlf3CnRU91wHJKysfVg.svg"
                  className="min-h-0 min-w-0 w-8 shrink-0"
                />
                <div className="flex flex-col gap-px w-32">
                  <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-3/5">
                    Location
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                    0123 Some Place
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[url(https://file.rendit.io/n/MS97NrYq7WfylQozuyeo.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
            <div className="bg-white/50 flex flex-row items-end">
              <div className="flex flex-col gap-24 w-[1143px] h-64">
                <div className="flex flex-row gap-16 w-3/5 items-end">
                  <img
                    src="https://file.rendit.io/n/D0oJfIDSXcsluGwK4cYh.svg"
                    className="min-h-0 min-w-0 mb-8"
                  />
                  <div className="relative flex flex-col pb-12 w-[526px] items-start">
                    <div className="whitespace-nowrap text-5xl font-['Yeseva_One'] text-[#1f2b6c] absolute top-5 left-0 h-12 w-[526px]">
                      Book an Appointment
                    </div>
                    <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#1f2b6c] relative w-48">
                      Home / Appointment
                    </div>
                  </div>
                </div>
                <Link to={"/bookevent"}>
                <div className="w-[316px] h-24 bg-[#bfd2f8] absolute top-[580px] hover:bg-blue-400 left-[524px] flex flex-row justify-center gap-12 items-center px-5 py-6 rounded"style={{ marginTop: -230, marginLeft: -56 }}>
                  <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] w-3/5">
                    Event Schedule
                  </div>
                  <img
                    src="https://file.rendit.io/n/ITYx4U0gp7MVKNiNBvNe.svg"
                    className="min-h-0 min-w-0 w-12 shrink-0"
                  />
                </div>
                </Link>
                <button
                  className="w-[316px] h-24 bg-[#1f2b6c] absolute top-[580px] hover:bg-blue-400 left-48 flex flex-row justify-center gap-12 items-center px-5 py-6 rounded"
                  onClick={handleScrollToForm}
                  style={{ marginTop: -230, marginLeft: -56 }}
                >
                  <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-3/5">
                    Book an Appointment
                  </div>
                  <img
                    src="https://file.rendit.io/n/DnEyUpZ2YDxJsxSGCWUQ.svg"
                    className="min-h-0 min-w-0 w-12 shrink-0"
                  />
                </button>

                <div
                  className="whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#159eec] mr-12"
                  style={{ marginLeft: 857, marginTop: 400 }}
                >
                  Book an Event
                </div>
              </div>
              <div className="relative flex flex-col justify-end pt-32 w-56 shrink-0">
                <img
                  src="https://file.rendit.io/n/cuus4NDwfbKbSR93pQHy.svg"
                  className="w-32 h-32 min-h-0 min-w-0 absolute top-0 left-24"
                />
                <div className="bg-[#159eec] relative h-2 shrink-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center mx-48">
          <div className="flex flex-col gap-16 w-1/2">
            <div className="bg-[#bfd2f8] flex flex-col justify-between gap-px rounded">
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form
                  onSubmit={handleEventFormSubmit}
                  className="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
                >
                  <h2 className="text-2xl font-bold text-center mb-6">
                    Book Event
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventInfo" className="font-medium">
                        Event Info:
                      </label>
                      <input
                        type="text"
                        id="eventInfo"
                        name="eventInfo"
                        value={eventFormData.eventInfo}
                        onChange={handleEventFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contactInfo" className="font-medium">
                        Contact Info:
                      </label>
                      <input
                        type="text"
                        id="contactInfo"
                        name="contactInfo"
                        value={eventFormData.contactInfo}
                        onChange={handleEventFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="font-medium">
                        Date:
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={eventFormData.date}
                        onChange={handleEventFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="font-medium">
                        Time:
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={eventFormData.time}
                        onChange={handleEventFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="doctorName" className="font-medium">
                        Doctor Name:
                      </label>
                      <input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        value={eventFormData.doctorName}
                        onChange={handleEventFormChange}
                        placeholder="Enter your name"
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="eventContent" className="font-medium">
                        Event Content:
                      </label>
                      <input
                        type="text"
                        id="eventContent"
                        name="eventContent"
                        value={eventFormData.eventContent}
                        onChange={handleEventFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="screeningTest" className="font-medium">
                        Screening Test:
                      </label>
                      <div className="flex gap-4">
                        <label htmlFor="noScreening">
                          <input
                            type="radio"
                            id="noScreening"
                            name="screeningTest"
                            value="noScreening"
                            checked={
                              eventFormData.screeningTest === "noScreening"
                            }
                            onChange={handleEventFormChange}
                            className="mr-2"
                          />
                          No Screening Test
                        </label>
                        <label htmlFor="screening">
                          <input
                            type="radio"
                            id="screening"
                            name="screeningTest"
                            value="screening"
                            checked={
                              eventFormData.screeningTest === "screening"
                            }
                            onChange={handleEventFormChange}
                            className="mr-2"
                          />
                          Screening Test
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url(https://file.rendit.io/n/CADt3ytKCAg3MqPazXAa.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col mb-16">
          <div className="bg-[#fcfefe] flex flex-row justify-center gap-24 items-center">
            <div className="flex flex-col gap-4">
              <div
                className="whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#159eec] mr-12"
                style={{ marginRight: 300 }}
              >
                Book an Appointment
              </div>
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#212124]"></div>
            </div>
            <div id="appointmentForm">
              <div
                className="flex justify-center items-center min-h-screen bg-gray-100"
                style={{ marginRight: 100 }}
              >
                <form
                  onSubmit={handleAppointmentFormSubmit}
                  className="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
                >
                  <h2 className="text-2xl font-bold text-center mb-6">
                    Book Appointment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventInfo" className="font-medium">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={appointmentFormData.name}
                        onChange={handleAppointmentFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="font-medium">
                        Gender:
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={appointmentFormData.gender}
                        onChange={handleAppointmentFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="font-medium">
                        Date:
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={appointmentFormData.date}
                        onChange={handleAppointmentFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="font-medium">
                        Time:
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={appointmentFormData.time}
                        onChange={handleAppointmentFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="doctorName" className="font-medium">
                        Email:
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={appointmentFormData.email}
                        onChange={handleAppointmentFormChange}
                        placeholder="Enter your email"
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="eventContent" className="font-medium">
                        Contact Info:
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={appointmentFormData.phone}
                        onChange={handleAppointmentFormChange}
                        className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="screeningTest" className="font-medium">
                        Screening Test:
                      </label>
                      <div className="flex gap-4">
                        <label htmlFor="noScreening">
                          <input
                            type="radio"
                            id="noScreening"
                            name="screeningTest"
                            value="noScreening"
                            checked={
                              appointmentFormData.screeningTest ===
                              "noScreening"
                            }
                            onChange={handleAppointmentFormChange}
                            className="mr-2"
                          />
                          No Screening Test
                        </label>
                        <label htmlFor="screening">
                          <input
                            type="radio"
                            id="screening"
                            name="screeningTest"
                            value="screening"
                            checked={
                              appointmentFormData.screeningTest === "screening"
                            }
                            onChange={handleAppointmentFormChange}
                            className="mr-2"
                          />
                          Screening Test
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-16 items-center">
          <div className="flex flex-col gap-2">
            <div className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec]">
              Get in touch
            </div>
            <div className="text-center text-3xl font-['Yeseva_One'] text-[#1f2b6c] mx-4">
              Contact
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mx-48">
            <div className="bg-[#bfd2f8] flex flex-col gap-1 h-56 items-start pl-6 py-12 rounded">
              <img
                src="https://file.rendit.io/n/QpSv0WBtrCeRlsBuxZtE.svg"
                className="min-h-0 min-w-0 mb-2 w-10"
              />
              <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] w-1/2 mb-1 ml-1">
                Emergency
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] ml-1 w-2/3">
                (237) 681-812-255
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] w-2/3 ml-1 mr-16">
                (237) 666-331-894
              </div>
            </div>
            <div className="bg-[#1f2b6c] flex flex-col gap-1 h-56 px-8 py-12 rounded">
              <img
                src="https://file.rendit.io/n/xKndjtlH9s3cvZoGp4l4.svg"
                className="min-h-0 min-w-0 mb-2 w-8"
              />
              <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#bfd2f8] mb-1 w-24">
                Location
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] w-3/4">
                0123 Some place
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] mr-5">
                9876 Some country
              </div>
            </div>
            <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-56 px-5 rounded">
              <img
                src="https://file.rendit.io/n/kIAfGin3EkGgsxJ0Bw8Q.svg"
                className="min-h-0 min-w-0 ml-2 w-10"
              />
              <div className="flex flex-col ml-2 gap-1 items-start">
                <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] mb-1 w-16">
                  Email
                </div>
                <div className="font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c]">
                  fildineeesoe@gmil.com
                </div>
                <div className="text-sm font-['Work_Sans'] text-[#1f2b6c] mr-2">
                  myebstudios@gmail.com
                </div>
              </div>
            </div>
            <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-56 px-4 rounded">
              <img
                src="https://file.rendit.io/n/2DOainvCfnBZ4pFO0FyG.svg"
                className="min-h-0 min-w-0 ml-3 w-8"
              />
              <div className="flex flex-col ml-3 gap-1">
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] mb-1 mr-6">
                  Working Hours
                </div>
                <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] mr-4">
                  Mon-Sat 09:00-20:00
                </div>
                <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c]">
                  Sunday Emergency only
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1f2b6c] flex flex-col gap-1 h-[427px] shrink-0 pt-16 pb-20 px-48">
            <div className="flex flex-row justify-between mb-3 w-5/6 items-start">
              <div className="flex flex-row gap-20 w-[548px] items-start">
                <div className="text-4xl font-['Yeseva_One'] uppercase text-[#bfd2f8] w-48 shrink-0">
                  Meddical
                </div>
                <div className="flex flex-row gap-8 w-1/2 items-center">
                  <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] mb-px w-1/2">
                    Important Links
                  </div>
                  <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] w-24 shrink-0">
                    Contact Us
                  </div>
                </div>
              </div>
              <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] w-24 shrink-0">
                News letter
              </div>
            </div>
            <div className="flex flex-row mr-px gap-20 items-center">
              <div className="flex flex-row gap-8 items-center">
                <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] w-2/3">
                  Leading the Way in Medical
                  <br />
                  Execellence, Trusted Care.
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe]">
                    Appointment
                  </div>
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-3/5">
                    Doctors
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-8 w-1/2 items-center">
                <div className="flex flex-col mt-px gap-2 w-2/5">
                  <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mr-12">
                    Call: (237) 681-812-255
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe]">
                    Email: fildineesoe@gmail.com
                  </div>
                </div>
                <div className="bg-[#bfd2f8] flex flex-row gap-6 w-1/2 h-12 items-center px-2 rounded">
                  <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] w-48">
                    Enter your email address
                  </div>
                  <img
                    src="https://file.rendit.io/n/ZvYTeUS0LDpmNccdatSp.svg"
                    className="min-h-0 min-w-0 w-6 shrink-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between ml-[275px] gap-[109px] items-center">
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mb-px w-16 shrink-0">
                Services
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-1/2">
                Address: 0123 Some place
              </div>
            </div>
            <div className="flex flex-row justify-between gap-24 items-center mb-10 ml-[275px]">
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mb-px w-16 shrink-0">
                About Us
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-[110px] shrink-0">
                Some country
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/Eh48uz2C2IJhgCB34ZHq.svg"
              className="min-h-0 min-w-0 self-center mb-10"
            />
            <div className="flex flex-row justify-between items-center">
              <div className="whitespace-nowrap font-['Work_Sans'] text-[#fcfefe] w-1/2">
                © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
              </div>
              <div className="flex flex-row justify-between gap-5 items-center">
                <img
                  src="https://file.rendit.io/n/Q9QLIylmuyI0fHsmStwn.svg"
                  className="min-h-0 min-w-0 w-6 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/tma1x1Z4FZPkwkgz77Ga.svg"
                  className="min-h-0 min-w-0 w-6 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/Ovwa89NUwtZLW9Sn2RIA.svg"
                  className="min-h-0 min-w-0 w-6 shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
