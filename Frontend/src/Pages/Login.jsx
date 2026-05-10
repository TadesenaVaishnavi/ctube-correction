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
              style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

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


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../api/authApi";
// import "../styles/Profile.css";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleLogin = async () => {
//     const { email, password } = form;

//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await loginUser(form);

//       const token = res.data?.token;

//       if (token) {
//         localStorage.setItem("token", token);
//       }

//       const message =
//         typeof res.data?.message === "string"
//           ? res.data.message
//           : "Login successful 🚀";

//       alert(message);
//       navigate("/");

//     } catch (err) {
//       const msg =
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         "Login failed";

//       setError(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="profilePage">
//       <div className="container">
//         <div className="card">

//           <div className="profile-pic"></div>

//           <h2>Welcome Back</h2>
//           <p className="joined">Login to continue</p>

//           {/* Email */}
//           <div className="input-group">
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Password */}
//           <div className="input-group" style={{ position: "relative" }}>
//             <input
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//             />

//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 fontSize: "14px",
//                 color: "#9e024b",
//               }}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </span>
//           </div>

//           {/* Error */}
//           {error && (
//             <p style={{ color: "red", fontSize: "12px" }}>
//               {error}
//             </p>
//           )}

//           {/* Button */}
//           <button onClick={handleLogin} disabled={loading} className="btn">
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           {/* Links */}
//           <p className="joined" style={{ marginTop: "15px" }}>
//             Don’t have an account?{" "}
//             <Link to="/signup">Sign Up</Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Profile.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // ✅ use env variable (Vercel + production safe)
//   const API = import.meta.env.VITE_AUTH_API;

//   const handleLogin = async () => {
//     if (!email || !password) {
//       alert("All fields are required");
//       return;
//     }

//     try {
//       const res = await fetch(`${API}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       // ✅ always parse JSON (NOT text)
//       const data = await res.json();

//       // ❌ backend error handling
//       if (!res.ok) {
//         alert(data.message || "Invalid credentials");
//         return;
//       }

//       // ✅ store real token from backend
//       localStorage.setItem("token", data.token);

//       alert("Login successful 🚀");

//       // redirect
//       navigate("/");

//     } catch (err) {
//       console.error("Login error:", err);
//       alert("Login failed. Check backend or network.");
//     }
//   };

//   return (
//     <div className="profilePage">
//       <div className="container">
//         <div className="card">

//           <div className="profile-pic"></div>

//           <h2>Welcome Back</h2>
//           <p className="joined">Login to continue</p>

//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button onClick={handleLogin} className="btn">
//             Login
//           </button>

//           <p className="joined" style={{ marginTop: "15px" }}>
//             Don’t have an account?{" "}
//             <Link to="/signup" style={{ color: "#9e024b" }}>
//               Sign Up
//             </Link>
//           </p>

//           <p className="joined">
//             <Link to="/forgot-password" style={{ color: "#9e024b" }}>
//               Forgot Password?
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
