/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-dupe-class-members */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useState, useEffect } from "react";
import Footer from "./footer";
import { Link, unstable_HistoryRouter, useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";

import initializeFirebase from "../Firebase/index";
const { database } = initializeFirebase();

class Doctor extends Component {
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
  render() {
    return (
      <div className="flex flex-col gap-16">
        <div className="overflow-hidden bg-[#fcfefe] flex flex-col justify-between gap-[569px] w-full">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col">
              <div className="bg-[#fcfefe] flex flex-row justify-between h-20 shrink-0 items-center px-48">
                <div className="text-4xl font-['Yeseva_One'] uppercase text-[#1f2b6c]">
                  Med<div className="text-[#159eec] contents">dical</div>
                </div>
                <div className="flex flex-row justify-between w-3/5 items-center">
                  <div className="flex flex-row gap-1 items-center">
                    <img
                      src="https://file.rendit.io/n/8TeHpchaKLKd22mzclbb.svg"
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
                      src="https://file.rendit.io/n/yYvfHiiDsLKKjL4iOYmR.svg"
                      className="min-h-0 min-w-0 w-8 shrink-0"
                    />
                    <div className="flex flex-col gap-px w-48 items-start">
                      <div className="whitespace-nowrap font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-1/2">
                        Work Hour
                      </div>
                      <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec] self-stretch">
                        09:00 - 20:00 Everyday
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src="https://file.rendit.io/n/WrMqMbwKLA675mfr3mNS.svg"
                      className="min-h-0 min-w-0 w-8 shrink-0"
                    />
                    <div className="flex flex-col gap-px w-32 items-start">
                      <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-3/5">
                        Location
                      </div>
                      <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec] self-stretch">
                        0123 Some Place
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[url(https://file.rendit.io/n/8RDlC674alqedu6cbcnN.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
                <div className="bg-white/50 flex flex-row items-center">
                  <div className="flex flex-col gap-24 w-[1143px] h-64 items-start">
                    <div className="flex flex-row gap-16 items-start">
                      <img
                        src="https://file.rendit.io/n/VeJEds0ev64MQ5ah4yUr.svg"
                        className="min-h-0 min-w-0 mb-8"
                      />
                      <div className="self-end relative flex flex-col pb-12 w-56 shrink-0 items-start">
                        <div className="whitespace-nowrap text-5xl font-['Yeseva_One'] text-[#1f2b6c] absolute top-5 left-0 h-12 w-56">
                          About us
                        </div>
                        <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#1f2b6c] relative w-3/5">
                          Home / About
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative flex flex-col items-start">
                      <div className="w-[837px] h-2 bg-[#1f2b6c] absolute top-0 left-[305.697509765625px]" />
                      <div className="bg-[#bfd2f8] relative w-[306px] h-2 shrink-0" />
                    </div>
                  </div>
                  <div className="self-end relative flex flex-col justify-end pt-32 w-56 shrink-0">
                    <img
                      src="https://file.rendit.io/n/u1NUaaY2FepqaA078Rer.svg"
                      className="w-32 h-32 min-h-0 min-w-0 absolute top-0 left-24"
                    />
                    <div className="bg-[#159eec] relative h-2 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-16">
          <div className="self-center flex flex-col gap-2">
            <div className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec] mx-3">
              Trusted Care
            </div>
            <div className="text-center whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#1f2b6c]">
              Our Doctors
            </div>
            <Link to={"/managedoctor"}>
              <button className="bg-[#bfd2f8] hover:bg-blue-300 flex flex-col justify-center w-60 shrink-0 h-12 items-center rounded-[50px]">
                <a className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#1f2b6c] w-2/5"style={{marginLeft:-20}}>
                  Manage Doctor
                </a>
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-row gap-4 items-start mx-48">
              {this.state.tableData.map((row, index) => (
                <div key={row.key} className="flex flex-col w-50 h-200">
                  <img
                    src={row.data.DoctorImg}
                    className="h-48 min-w-0 object-cover self-center"
                    alt={`Doctor ${index + 1}`}
                  />
                  <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-[142px] shrink-0 items-center">
                    <div className="flex flex-col gap-2 w-2/1">
                      <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#1f2b6c] mx-px">
                        Name: {row.data.DoctorName}
                      </div>
                      <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#1f2b6c] mx-px">
                        Phone: {row.data.ContactInfo}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1f2b6c] flex flex-col justify-center h-12 shrink-0 items-center rounded-br rounded-bl">
                    
                      <Link
                        to={`/doctordetail/${row.data.DoctorId}`}
                        className="text-center whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] w-24"
                      >
                        <button>View Profile</button>
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className="bg-[#fafdfe] flex flex-col justify-center gap-16 h-[636px] shrink-0 items-center px-48">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec] self-stretch">
                Better information, Better health
              </div>
              <div className="text-center text-3xl font-['Yeseva_One'] text-[#1f2b6c] w-20">
                News
              </div>
            </div>
            <div className="self-stretch flex flex-col gap-5">
              <div className="flex flex-row gap-5 items-center">
                <div className="shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] bg-[#fcfefe] flex flex-row gap-5 w-1/2 items-center rounded">
                  <img
                    src="https://file.rendit.io/n/e5hY1z3iM7EwbpdWB895.png"
                    className="min-h-0 min-w-0"
                  />
                  <div className="flex flex-col gap-6 w-3/5 items-start">
                    <div className="self-stretch flex flex-col ml-px gap-2">
                      <div className="whitespace-nowrap text-sm font-['Work_Sans'] text-[#159eec]">
                        Monday 05, September 2021 | By Author
                      </div>
                      <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#212124] mr-3">
                        This Article’s Title goes Here, <br />
                        but not too long.
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 w-24 items-center">
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/Jg4qmeJohzQChyegQsUW.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          68
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/ztjMRfeLzXplHBWYOe6j.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          86
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#fcfefe] flex flex-row gap-5 w-1/2 items-center rounded">
                  <img
                    src="https://file.rendit.io/n/e5hY1z3iM7EwbpdWB895.png"
                    className="min-h-0 min-w-0"
                  />
                  <div className="flex flex-col gap-6 w-3/5 items-start">
                    <div className="self-stretch flex flex-col ml-px gap-2">
                      <div className="whitespace-nowrap text-sm font-['Work_Sans'] text-[#159eec]">
                        Monday 05, September 2021 | By Author
                      </div>
                      <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#212124] mr-3">
                        This Article’s Title goes Here, <br />
                        but not too long.
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 w-24 items-center">
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/Jg4qmeJohzQChyegQsUW.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          68
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/ztjMRfeLzXplHBWYOe6j.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          86
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mb-3 gap-5 items-center">
                <div className="bg-[#fcfefe] flex flex-row gap-5 w-1/2 items-center rounded">
                  <img
                    src="https://file.rendit.io/n/e5hY1z3iM7EwbpdWB895.png"
                    className="min-h-0 min-w-0"
                  />
                  <div className="flex flex-col gap-6 w-3/5 items-start">
                    <div className="self-stretch flex flex-col ml-px gap-2">
                      <div className="whitespace-nowrap text-sm font-['Work_Sans'] text-[#159eec]">
                        Monday 05, September 2021 | By Author
                      </div>
                      <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#212124] mr-3">
                        This Article’s Title goes Here, <br />
                        but not too long.
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 w-24 items-center">
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/Jg4qmeJohzQChyegQsUW.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          68
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/ztjMRfeLzXplHBWYOe6j.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          86
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#fcfefe] flex flex-row gap-5 w-1/2 items-center rounded">
                  <img
                    src="https://file.rendit.io/n/e5hY1z3iM7EwbpdWB895.png"
                    className="min-h-0 min-w-0"
                  />
                  <div className="flex flex-col gap-6 w-3/5 items-start">
                    <div className="self-stretch flex flex-col ml-px gap-2">
                      <div className="whitespace-nowrap text-sm font-['Work_Sans'] text-[#159eec]">
                        Monday 05, September 2021 | By Author
                      </div>
                      <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#212124] mr-3">
                        This Article’s Title goes Here, <br />
                        but not too long.
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 w-24 items-center">
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/Jg4qmeJohzQChyegQsUW.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          68
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                        <img
                          src="https://file.rendit.io/n/ztjMRfeLzXplHBWYOe6j.svg"
                          className="min-h-0 min-w-0 w-4 shrink-0"
                        />
                        <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                          86
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/iMivnzYqEhSWTDVGI01W.svg"
                className="min-h-0 min-w-0 self-center w-20"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Doctor;
