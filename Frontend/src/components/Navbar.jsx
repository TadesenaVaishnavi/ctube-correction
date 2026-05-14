import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/Layout.css";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const fileInputRef = useRef();

  return (
    <div className="navbar">
      <div className="navLeft">
        <img
          src="/icons/hamburger.png"
          alt="menu"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />

        <Link to="/home">
          <img src="/logo/Circle.png" className="logo" />
        </Link>
      </div>

      {/* ✅ SearchBar component */}
      <SearchBar />

      <div className="navRight">
        <div className="watchicons">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
          />

          <img
            src="/icons/video-camera.png"
            onClick={() => fileInputRef.current.click()}
          />

          <img src="/icons/bell.png" />

          <img
            src="/icons/join.png"
            onClick={() => navigate("/watch")}
          />
        </div>

        <Link to="/profile">
          <div className="profile"></div>
        </Link>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/watch.css";

// const Navbar = () => {
//   return (
//     <div className="watchnavbar">

//       {/* LEFT */}
//       <div className="watchnavLeft">
//         <img src="/icons/hamburger.png" alt="menu" />
//         <Link to="/">
//           <img src="/logo/Logo.png" alt="logo" className="watch-logo" />
//         </Link>
//       </div>

//       {/* CENTER */}
//       <div className="watchsearchBar">
//         <input type="text" placeholder="Search..." />

//         <div className="watchsearchIcons">
//           <img src="/icons/search.png" alt="search" />
//         </div>
//       </div>

//       {/* <div className="watchsearchBar">
//         <input type="text" placeholder="Search..." />
//         <img src="/icons/search.png" alt="search" />
//       </div> */}

//       {/* RIGHT */}
//       <div className="watchnavRight">
//         <div className="watch-icons">
//           <img src="/icons/video-camera.png" alt="video" />
//           <img src="/icons/bell.png" alt="bell" />
//           <img src="/icons/join.png" alt="extra" />
//         </div>
//         <Link to="/profile">
//           <div className="watchprofile"></div>
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default Navbar;