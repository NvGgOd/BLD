import { NavLink } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContextGoogle";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  console.log("out", user);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="bg-[#1f2b6c] flex flex-row justify-between h-20 shrink-0 items-center px-64">
      <div className="flex flex-row justify-between gap-5 items-center">
        <NavLink to="/" className="text-lg font-['Work_Sans'] text-[#fcfefe] w-12 shrink-0">
          Home
        </NavLink>
        <NavLink to="/about" className="whitespace-nowrap text-lg font-['Work_Sans'] text-[#fcfefe] w-20 shrink-0">
          About us
        </NavLink>
        <NavLink to="/appointment" className="text-lg font-['Work_Sans'] text-[#fcfefe] w-12 shrink-0">
          Event
        </NavLink>
        <NavLink to="/news" className="text-lg font-['Work_Sans'] text-[#fcfefe] w-12 shrink-0">
          News
        </NavLink>
        <NavLink to="/contact" className="text-lg font-['Work_Sans'] text-[#fcfefe] w-16 shrink-0">
          Contact
        </NavLink>
        <NavLink to="/doctor" className="text-lg font-['Work_Sans'] text-[#fcfefe] w-16 shrink-0">
          Doctor
        </NavLink>
      </div>
      <div className="flex flex-row gap-12 items-center">
        <img
          src="https://file.rendit.io/n/l85KnV7ytJWMgzVYesGX.svg"
          className="min-h-0 min-w-0 w-5 shrink-0"
          alt="User Icon"
        />
        <NavLink to="/signin">
          <button className="bg-[#bfd2f8] flex flex-col hover:bg-blue-300 justify-center w-32 shrink-0 h-12 items-center rounded-[50px] ">
            <span className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#1f2b6c] w-2/5">
              Sign In
            </span>
          </button>
        </NavLink>
        <div className="flex justify-between  w-full p-4">
          {user ? (
            <button onClick={handleSignOut} style={{
             
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
             
              transition: 'background-color 0.3s ease',
            }}>Logout</button>
          ) : (
            <Link to="/SignIn"></Link>
          )}
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
