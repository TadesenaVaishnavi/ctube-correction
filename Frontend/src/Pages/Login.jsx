import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { loginUser } from "../api/authApi";
// import { API } from "../api";
import "../styles/Profile.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async () => {
    const { email, password } = form;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser({ email, password });

      // const res = await axios.post(`${API}/auth/login`, form);

      const token = res.data?.token;

      if (token) {
        localStorage.setItem("token", token);
      }

      const message =
        typeof res.data?.message === "string"
          ? res.data.message
          : "Login successful 🚀";

      alert(message);
      // navigate("/home");
      navigate("/home", { replace: true });

    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Login failed";

      setError(msg);
    } finally {
      setLoading(false);
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
            <input name="email" placeholder="Email" onChange={handleChange} />
          </div>

          <div style={{ position: "relative" }} className="input-group">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: 10, top: 15, cursor: "pointer", color: "#9e024b" }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {error && <p style={{ color: "red", fontSize: "12px" }} >{error}</p>}

          <button onClick={handleLogin} disabled={loading} className="btn">
            {loading ? "Logging in..." : "Login"}
          </button>

          <p>
            Don’t have an account?<Link to="/signup" style={{ color: "#9e024b" }}>Sign Up</Link>
          </p>
          <p className="joined"> <Link to="/forgot-password" style={{ color: "#9e024b" }}> Forgot Password? </Link> </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
