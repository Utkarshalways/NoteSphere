import React from "react";
import { useState } from "react";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);
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
              <a href="/about">About</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/signup">SignUp</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/signin">SignIn</a>
            </li>
          </ul>
        </div>
      </section>
      <div className={navOpen ? "hidden" : " sm:hidden"}>
        <ul
          className="flex gap-2 items-center 
       "
        >
          <li className=" m-2 cursor-pointer hover:underline">Home</li>
          <li className=" m-2 cursor-pointer hover:underline">Post</li>
          <li className=" m-2 cursor-pointer hover:underline" href={"/signup"}>
            Sign Up
          </li>
          <li className=" m-2 cursor-pointer hover:underline" href={"/signin"}>
            Sign In
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
