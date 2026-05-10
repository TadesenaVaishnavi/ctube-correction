import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const API = "https://ctube-correction-4.onrender.com";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      // ✅ store real token
      localStorage.setItem("token", data.token);

      alert("Login successful 🚀");

      navigate("/"); 

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          <h2>Welcome Back</h2>
          <p>Login to continue</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <p>
            Don’t have an account?{" "}
            <Link to="/signup">Sign Up</Link>
          </p>

          <p>
            <Link to="/forgot">Forgot Password?</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
