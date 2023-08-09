/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { useState, useEffect } from "react";
import firebaseConfig from "../Firebase";
import { ref, push, onValue } from "firebase/database";
const db = firebaseConfig();

const Home = () => {
  
  return (
    <div className="overflow-hidden bg-[#fcfefe] flex flex-col w-full">
      <div className="bg-[#fcfefe] flex flex-row justify-between h-20 shrink-0 items-center px-48">
        <div className="text-4xl font-['Yeseva_One'] uppercase text-[#1f2b6c]">
          F<div className="text-[#159eec] contents">Blood</div>
        </div>
        <div className="flex flex-row justify-between w-3/5 items-center">
          <div className="flex flex-row gap-1 items-center">
            <img
              src="https://file.rendit.io/n/HdPLsEkJk6cA0F4Ffay7.svg"
              className="min-h-0 min-w-0 w-10 shrink-0"
            />
            <div className="flex flex-col mb-px gap-px w-[140px]">
              <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] mr-10">
                Emergency
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                (+84) 919-730-83
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img
              src="https://file.rendit.io/n/aqEwQUR8fzOUbgrF7QvV.svg"
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
              src="https://file.rendit.io/n/fyuTtiJurAL2aGLUP6CD.svg"
              className="min-h-0 min-w-0 w-8 shrink-0"
            />
            <div className="flex flex-col gap-px w-32 items-start">
              <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-3/5">
                Location
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec] self-stretch">
                FptSoftware
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mb-16 pb-[600px]">
        <div className="bg-[#02ddcd] flex flex-col">
          <div className="bg-[url(https://file.rendit.io/n/L9kps4Q9wVDCnbkZJT9Q.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
            <div className="bg-[linear-gradient(268deg,_#e5e4e8_20%,rgba(235,_234,_239,_0)_39%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
              <div className="bg-[url(https://file.rendit.io/n/Zjd0MaTPy6VvayiwVJF4.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-48 gap-8 h-[550px] shrink-0 items-start">
                <div className="flex flex-col gap-2 items-start">
                  <div className="whitespace-nowrap text-3xl font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec] ml-px w-48">
                    Caring for Life
                  </div>

                  <div className="whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#1f2b6c] self-stretch">
                    one drop of blood
                    <br />
                    digs more than a pond of water
                  </div>
                </div>
                <button className="bg-[#bfd2f8] flex flex-col justify-center ml-px h-12 shrink-0 items-center rounded-[50px]">
                  <button className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#1f2b6c] w-3/5 mx-8">
                    Our Services
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div
        className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec] self-center mb-2 w-[274px]"
        style={{ marginTop: -500 }}
      >
        Welcome to FBlood
      </div>
      <div className="text-center whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#1f2b6c] self-center mb-4 w-[473px]">
        A Great Place to Donation
      </div>
      <div className="text-center font-['Work_Sans'] leading-[22.4px] text-[#212124] self-center mb-8 w-1/2">
        Those drops of blood carry so many meanings. They are the breath of
        life, passing through philanthropists, bringing together humanity and
        saving lives in need. Every drop of blood donated is a noble act, a
        compassionate heart for the community.
      </div>

      <div className="bg-[url(https://file.rendit.io/n/z66i0DKN7b4Q48asH1kk.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-px items-start mx-48">
        <img
          src="https://file.rendit.io/n/qhc6C0BYAgt72PrP7Vcm.svg"
          className="min-h-0 min-w-0 mt-[-119px] ml-[-119px]"
        />
        <div className="self-stretch flex flex-row items-start mb-[-128px] mr-[-128px]">
          <div className="bg-[#bfd2f8] mt-32 w-56 shrink-0 h-2" />
          <div className="bg-[#1f2b6c] mt-32 w-1/2 h-2" />
          <div className="self-center relative flex flex-col w-[290px] shrink-0 items-start py-32">
            <img
              src="https://file.rendit.io/n/ji8AEzXEI1DfqbVH2Mse.svg"
              className="w-64 h-64 min-h-0 min-w-0 absolute top-0 left-8"
            />
            <div className="bg-[#159eec] relative w-3/5 h-2 shrink-0" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(21,_158,_236,_0.01)] flex flex-col justify-center mb-16 gap-16 items-center px-48 py-16">
        <div className="flex flex-col gap-2">
          <div className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec]">
            Care you can believe in
          </div>
          <div className="text-center whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#1f2b6c] mx-12">
            Our Services
          </div>
        </div>
        <div className="self-stretch flex flex-row gap-5 items-center">
          <div className="border-solid border-[#1f2b6c] bg-[#fcfefe] flex flex-col justify-end pt-6 gap-12 border rounded">
            <div className="flex flex-col justify-between gap-6 mx-0">
              <div className="flex flex-col gap-2 items-center mx-6">
                <img
                  src="https://file.rendit.io/n/yNANl0PPj7hUMCij6y6M.svg"
                  className="min-h-0 min-w-0 w-8"
                />
                <div className="text-center whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#212124] self-stretch">
                  Free Checkup
                </div>
              </div>
              <div className="bg-[#1f2b6c] flex flex-col justify-center gap-2 h-24 shrink-0 items-center">
                <img
                  src="https://file.rendit.io/n/xTJG0YyrkdQ1t4EVOvqJ.svg"
                  className="min-h-0 min-w-0 w-8"
                />
                <div className="text-center font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] w-3/5">
                  Cardiogram
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center mx-0">
              <div className="flex flex-col gap-2 w-24 items-center">
                <img
                  src="https://file.rendit.io/n/tPHbplLo4nM6q9MWOPsZ.svg"
                  className="min-h-0 min-w-0 w-8"
                />
                <div className="text-center whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#212124] self-stretch">
                  Blood Bank
                </div>
              </div>
              <div className="bg-[#1f2b6c] self-stretch flex flex-col justify-center h-10 shrink-0 items-center rounded-br rounded-bl">
                <div className="whitespace-nowrap text-sm font-['Work_Sans'] font-medium text-[#bfd2f8] w-12">
                  View All
                </div>
              </div>
            </div>
          </div>
          <div className="self-start flex flex-col gap-4 w-1/2 mt-6 mr-px">
            <div className="whitespace-nowrap text-2xl font-['Work_Sans'] font-medium mb-2 mr-6">
              A passion for putting patients first.
            </div>
            <div className="flex flex-row mr-20 gap-12 items-center">
              <div className="flex flex-row gap-2 w-1/2 items-center">
                <div className="bg-[#159eec] w-4 shrink-0 h-4 rounded-[50px]" />
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] w-48">
                  A Passion for Healing
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#159eec] w-4 shrink-0 h-4 rounded-[50px]" />
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] w-24">
                  5-Star Care
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mr-16 items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-[#159eec] w-4 shrink-0 h-4 rounded-[50px]" />
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] w-24">
                  All our best
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div
                  className="bg-[#159eec] w-4 shrink-0 h-4 rounded-[50px]"
                  style={{ marginLeft: -238 }}
                />
                Blood donation organization
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center mb-4 mr-12">
              <div className="flex flex-row gap-2 w-1/2 items-center">
                <div className="bg-[#159eec] w-4 shrink-0 h-4 rounded-[50px]" />
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] w-48">
                  A Legacy of Excellence
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div
                  className="bg-[#159eec] w-4 shrink-0 h-4 rounded-[50px]"
                  style={{ marginLeft: -8 }}
                />
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] w-32">
                  Always Caring
                </div>
              </div>
            </div>
            <div className="font-['Work_Sans'] leading-[22.4px] text-[#212124]">
              We are very proud of the blood donation service that we provide.
              Blood donation is an incredibly important and meaningful act, not
              only saving the lives of those in need of blood but also
              contributing to saving millions of people worldwide. Our blood
              donation service is designed to ensure convenience and safety for
              all volunteers. We are committed to implementing the highest
              medical procedures and standards, ensuring that blood is
              collected, tested, and stored accurately and safely..
            </div>
            <div className="font-['Work_Sans'] leading-[22.4px] text-[#212124]">
              Our blood donation service is designed to ensure convenience and
              safety for all volunteers. We are committed to implementing the
              highest medical procedures and standards, ensuring that blood is
              collected, tested, and stored accurately and safely.
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-[url(https://file.rendit.io/n/W9C5tG0smQsA2fIuR31T.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row h-56 shrink-0 items-end">
              <div className="bg-[#bfd2f8] w-20 shrink-0 h-2" />
              <div className="relative flex flex-col w-64 items-end">
                <div className="w-48 h-2 bg-[#1f2b6c] absolute top-0 left-0" />
                <div className="bg-[#159eec] relative w-12 h-2 shrink-0" />
              </div>
            </div>
            <div className="bg-[url(https://file.rendit.io/n/5c4PsxZiCs3NOAvFdobV.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row h-56 shrink-0 items-end">
              <div className="bg-[#bfd2f8] w-20 shrink-0 h-2" />
              <div className="relative flex flex-col w-64 items-end">
                <div className="w-48 h-2 bg-[#1f2b6c] absolute top-0 left-0" />
                <div className="bg-[#159eec] relative w-12 h-2 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[url(https://file.rendit.io/n/CADt3ytKCAg3MqPazXAa.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col mb-16">
        <div className="bg-[#fcfefe] flex flex-row justify-center gap-24 items-center">
          <div className="flex flex-col gap-4">
            <div className="whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#159eec] mr-12">
              Book an Appointment
            </div>
            <div className="font-['Work_Sans'] leading-[22.4px] text-[#212124]"></div>
          </div>
          <div id="appointmentForm">
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Book Event</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="eventInfo" className="font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
          <label htmlFor="gender" className="font-medium">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
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
            <label htmlFor="date" className="font-medium">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="font-medium">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="doctorName" className="font-medium">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="eventContent" className="font-medium">Contact Info:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-center font-medium leading-[22.4px] text-[#1f2b6c] w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="screeningTest" className="font-medium">Screening Test:</label>
            <div className="flex gap-4">
              <label htmlFor="noScreening">
                <input
                  type="radio"
                  id="noScreening"
                  name="screeningTest"
                  value="noScreening"
                  checked={formData.screeningTest === 'noScreening'}
                  onChange={handleChange}
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
                  checked={formData.screeningTest === 'screening'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Screening Test
              </label>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Submit
          </button>
        </div>
      </form>
    </div>
          </div>
    
        </div>
      </div> */}

      <div
        className="bg-[#fafdfe] flex flex-col justify-center mb-16 gap-16 h-[636px] shrink-0 items-center px-48"
        style={{ marginLeft: 57 }}
      >
        <div className="flex flex-col gap-2 items-center">
          <div
            className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec] self-stretch"
            style={{ marginLeft: -100 }}
          >
            Better information, Better health
          </div>
          <div
            className="text-center text-3xl font-['Yeseva_One'] text-[#1f2b6c] w-20"
            style={{ marginLeft: -90 }}
          >
            News
          </div>
        </div>
        <div className="self-stretch flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <div className="shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] bg-[#fcfefe] flex flex-row gap-5 w-1/2 items-center rounded">
              <img
                src="https://file.rendit.io/n/Y7E3P84Kk72GaXmKdtSa.png"
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
                      src="https://file.rendit.io/n/yQ3OOXJ3encQC8FoCMSh.svg"
                      className="min-h-0 min-w-0 w-4 shrink-0"
                    />
                    <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                      68
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                    <img
                      src="https://file.rendit.io/n/p8GE7Q1ua04El98zyXWX.svg"
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
                src="https://file.rendit.io/n/Y7E3P84Kk72GaXmKdtSa.png"
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
                      src="https://file.rendit.io/n/yQ3OOXJ3encQC8FoCMSh.svg"
                      className="min-h-0 min-w-0 w-4 shrink-0"
                    />
                    <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                      68
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                    <img
                      src="https://file.rendit.io/n/p8GE7Q1ua04El98zyXWX.svg"
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
                src="https://file.rendit.io/n/Y7E3P84Kk72GaXmKdtSa.png"
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
                      src="https://file.rendit.io/n/yQ3OOXJ3encQC8FoCMSh.svg"
                      className="min-h-0 min-w-0 w-4 shrink-0"
                    />
                    <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                      68
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                    <img
                      src="https://file.rendit.io/n/p8GE7Q1ua04El98zyXWX.svg"
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
                src="https://file.rendit.io/n/Y7E3P84Kk72GaXmKdtSa.png"
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
                      src="https://file.rendit.io/n/yQ3OOXJ3encQC8FoCMSh.svg"
                      className="min-h-0 min-w-0 w-4 shrink-0"
                    />
                    <div className="text-sm font-['Work_Sans'] text-[#212124] w-1/2">
                      68
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 w-10 shrink-0 items-center">
                    <img
                      src="https://file.rendit.io/n/p8GE7Q1ua04El98zyXWX.svg"
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
        </div>
      </div>
      <div className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec] self-center mb-2 w-40">
        Get in touch
      </div>
      <div className="text-center text-3xl font-['Yeseva_One'] text-[#1f2b6c] self-center mb-16 w-32">
        Contact
      </div>
      <div className="flex flex-row justify-between items-center mb-16 mx-48">
        <div className="bg-[#bfd2f8] flex flex-col gap-1 h-56 items-start pl-6 py-12 rounded">
          <img
            src="https://file.rendit.io/n/ARlLbsEeIof55UT4obPN.svg"
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
        <div className="bg-[#1f2b6c] flex flex-col gap-1 h-56 items-start px-8 py-12 rounded">
          <img
            src="https://file.rendit.io/n/UMdh9sA79JVuhQhUNRVP.svg"
            className="min-h-0 min-w-0 mb-2 w-8"
          />
          <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#bfd2f8] mb-1 w-24">
            Location
          </div>
          <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] w-3/4">
            0123 Some place
          </div>
          <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] self-stretch mr-5">
            9876 Some country
          </div>
        </div>
        <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-56 items-start px-5 rounded">
          <img
            src="https://file.rendit.io/n/aQ2IKoSC8NjzH0pPD1i1.svg"
            className="min-h-0 min-w-0 ml-2 w-10"
          />
          <div className="self-stretch flex flex-col ml-2 gap-1">
            <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] self-start mb-1 w-16">
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
        <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-56 items-start px-4 rounded">
          <img
            src="https://file.rendit.io/n/TE5a8DjcBCpqpCD8I3js.svg"
            className="min-h-0 min-w-0 ml-3 w-8"
          />
          <div className="self-stretch flex flex-col ml-3 gap-1">
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
      <div className="bg-[#1f2b6c] flex flex-col gap-1 h-[427px] shrink-0 items-start pt-16 pb-20 px-48">
        <div className="flex flex-row justify-between mb-3 w-5/6 items-center">
          <div className="flex flex-row gap-20 w-[548px] items-center">
            <div className="text-4xl font-['Yeseva_One'] uppercase text-[#bfd2f8] w-48 shrink-0">
              Meddical
            </div>
            <div className="self-start flex flex-row gap-8 w-1/2 items-center">
              <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] mb-px w-1/2">
                Important Links
              </div>
              <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] w-24 shrink-0">
                Contact Us
              </div>
            </div>
          </div>
          <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] self-start w-24 shrink-0">
            News letter
          </div>
        </div>
        <div className="self-stretch flex flex-row mr-px gap-20 items-center">
          <div className="flex flex-row gap-8 items-center">
            <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] w-2/3">
              Leading the Way in Medical
              <br />
              Execellence, Trusted Care.
            </div>
            <div className="flex flex-col gap-2 items-start">
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] self-stretch">
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
                src="https://file.rendit.io/n/OjnBPoBIVVPzwviH2Wch.svg"
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
          <button className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mb-px w-16 shrink-0">
            About Us
          </button>

          <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-[110px] shrink-0">
            Some country
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/wkasEFaPSlGyv3CwR1ya.svg"
          className="min-h-0 min-w-0 self-center mb-10"
        />
        <div className="self-stretch flex flex-row justify-between items-center">
          <div className="whitespace-nowrap font-['Work_Sans'] text-[#fcfefe] w-1/2">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </div>
          <div className="flex flex-row justify-between gap-5 items-center">
            <img
              src="https://file.rendit.io/n/U0LJroFEoupnsn5E4JfU.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/2jGhtic6jqHymQKRIyFT.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/OAPgju28VOCrsCKQNZMd.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
