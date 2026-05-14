import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Layout.css";

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
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
  );
}