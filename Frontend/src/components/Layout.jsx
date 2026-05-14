import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { uploadVideo } from "../api/videoApi";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("thumbnail", file);
    formData.append("title", file.name);

    try {
      await uploadVideo(formData);
      alert("Video uploaded 🚀");
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div className="home">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="navLeft">
          <img
            src="/icons/hamburger.png"
            alt="menu"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />

          <Link to="/home">
            <img src="/logo/Circle.png" className="logo" />
          </Link>
        </div>

        <div className="searchBar">
          <input placeholder="Search..." />
        </div>

        <div className="navRight">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleVideoUpload}
          />

          <img
            src="/icons/video-camera.png"
            onClick={() => fileInputRef.current.click()}
          />

          <img src="/icons/bell.png" />

          <Link to="/profile">
            <div className="profile"></div>
          </Link>
        </div>
      </div>

      <div className="main">

        {/* SIDEBAR */}
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <div className="menu">

            <div
              className={`menu-item ${location.pathname === "/home" ? "active" : ""}`}
              onClick={() => navigate("/home")}
            >
              <img src="/icons/home.png" />
              <span>Home</span>
            </div>

            <div
              className={`menu-item ${location.pathname === "/subscriptions" ? "active" : ""}`}
              onClick={() => navigate("/subscriptions")}
            >
              <img src="/icons/subscriptions.png" />
              <span>Subscriptions</span>
            </div>

            <div
              className={`menu-item ${location.pathname === "/history" ? "active" : ""}`}
              onClick={() => navigate("/history")}
            >
              <img src="/icons/history.png" />
              <span>History</span>
            </div>

            <div
              className={`menu-item ${location.pathname === "/watchlater" ? "active" : ""}`}
              onClick={() => navigate("/watchlater")}
            >
              <img src="/icons/clock.png" />
              <span>Watch later</span>
            </div>

            <div
              className={`menu-item ${location.pathname === "/liked" ? "active" : ""}`}
              onClick={() => navigate("/liked")}
            >
              <img src="/icons/like.png" />
              <span>Liked</span>
            </div>

            <div
              className={`menu-item ${location.pathname === "/channel" ? "active" : ""}`}
              onClick={() => navigate("/channel")}
            >
              <img src="/icons/user.png" />
              <span>Channel</span>
            </div>

          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="content">
          {children}
        </div>

      </div>
    </div>
  );
}