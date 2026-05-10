import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ use env variable (Vercel + production safe)
  const API = import.meta.env.VITE_AUTH_API;

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // ✅ always parse JSON (NOT text)
      const data = await res.json();

      // ❌ backend error handling
      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      // ✅ store real token from backend
      localStorage.setItem("token", data.token);

      alert("Login successful 🚀");

      // redirect
      navigate("/");

    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Check backend or network.");
    }
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          <div className="profile-pic"></div>

          <h2>Welcome Back</h2>
          <p className="joined">Login to continue</p>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin} className="btn">
            Login
          </button>

          <p className="joined" style={{ marginTop: "15px" }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: "#9e024b" }}>
              Sign Up
            </Link>
          </p>

          <p className="joined">
            <Link to="/forgot-password" style={{ color: "#9e024b" }}>
              Forgot Password?
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;