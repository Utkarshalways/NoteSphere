import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../context/Firebasecontextprovider";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);
  const firebase = useFirebase();
  // console.log(firebase);
  return (
    <header className="bg-purple-800 p-4 flex gap-2 items-center justify-between text-white sticky">
      <div className="left flex gap-2 items-center ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
          alt=""
          className="h-8"
        />
        <p className=" font-bold text-l sm:text-sm">NOTESPHERE</p>
      </div>
      <section>
        <div
          className="HAMBURGER-ICON space-y-2 hidden  sm:inline "
          onClick={() => setnavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          {/* {console.log(navOpen)} */}
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-bounce bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        </div>

        <div className={navOpen ? "showMenuNav bg-purple-400 " : "hideMenuNav"}>
          {" "}
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setnavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] bg-purple-100 text-black p-4">
            <li className="border-b border-gray-400 my-8 uppercase">
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={
                firebase.isLoggedin
                  ? "hidden"
                  : "border-b border-gray-400 my-8 uppercase"
              }
            >
              <Link to={"/signup"}>Sign-Up</Link>
            </li>
            <li
              className={
                firebase.isLoggedin
                  ? "hidden"
                  : "border-b border-gray-400 my-8 uppercase"
              }
            >
              <Link to={"/signin"}>Sign-In</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className={navOpen ? "hidden" : " sm:hidden"}>
        <ul
          className="flex gap-2 items-center 
       "
        >
          <li className=" m-2 cursor-pointer hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" m-2 cursor-pointer hover:underline">Post</li>
          <li
            className={
              firebase.isLoggedin
                ? "hidden"
                : " m-2 cursor-pointer hover:underline"
            }
          >
            <Link to={"/signin"}>Sign-In</Link>
          </li>
          <li
            className={
              firebase.isLoggedin
                ? "hidden"
                : "  bg-blue-500 p-1 rounded-lg hover:bg-blue-600"
            }
          >
            <Link to={"/signup"}>Sign-Up</Link>
          </li>

          <li
            className={
              firebase.isLoggedin
                ? " m-2 cursor-pointer hover:underline"
                : "hidden"
            }
          >
            <button
              onClick={firebase.logout}
              className="  bg-red-500 p-1 rounded-lg hover:bg-red-600"
            >
              Log-Out
            </button>
          </li>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        {/* opacity:0.8; */}
        
        
      }
    `}</style>
    </header>
  );
};

export default Header;
