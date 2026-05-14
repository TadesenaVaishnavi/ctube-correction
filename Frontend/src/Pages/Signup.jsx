import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { API } from "../api";
import { registerUser } from "../api/authApi";
import "../styles/Profile.css";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isStrongPassword = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(pwd);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = async () => {
    const { username, email, password } = form;

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!isStrongPassword(password)) {
      setError(
        "Weak password: 8+ chars, uppercase, lowercase, number & special character required"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await registerUser({ username, email, password });

      // const res = await axios.post(`${API}/auth/register`, form);

      const message =
        typeof res.data?.message === "string"
          ? res.data.message
          : "Signup successful 🚀";

      alert(message);
      navigate("/login");

    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Signup failed";

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

          <h2>Create Account</h2>
          <p className="joined">Join us today 🚀</p>
          <div className="input-group">
          <input name="username" placeholder="Username" onChange={handleChange} />
          </div>
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

            <span onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: 10, top: 15, cursor: "pointer", color: "#9e024b" }}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

          <button onClick={handleSignup} disabled={loading} className="btn">
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className="joined" style={{ marginTop: "15px" }}>
            Already have account?{" "} <Link to="/login" style={{ color: "#9e024b" }}>Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;