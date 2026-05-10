// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../api/authApi";
// import "../styles/Profile.css";

// function Signup() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isStrongPassword = (pwd) =>
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(pwd);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSignup = async () => {
//     const { username, email, password } = form;

//     if (!username || !email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     if (!isStrongPassword(password)) {
//       setError(
//         "Weak password: 8+ chars, uppercase, lowercase, number & special character required"
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await registerUser({ username, email, password });

//       const message =
//         typeof res.data?.message === "string"
//           ? res.data.message
//           : "Signup successful 🚀";

//       alert(message);
//       navigate("/login");

//     } catch (err) {
//       const msg =
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         "Signup failed";

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

//           <h2>Create Account</h2>
//           <p className="joined">Join us today 🚀</p>

//           {/* Username */}
//           <div className="input-group">
//             <input
//               name="username"
//               type="text"
//               placeholder="Username"
//               value={form.username}
//               onChange={handleChange}
//             />
//           </div>

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
//           <button onClick={handleSignup} disabled={loading} className="btn">
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>

//           {/* Footer */}
//           <p className="joined" style={{ marginTop: "15px" }}>
//             Already have an account?{" "}
//             <Link to="/login">Login</Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Profile.css";

// const API = import.meta.env.VITE_API_URL;

// function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     if (!username || !email || !password) {
//       alert("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(`${API}/auth/register`, {
//         username,
//         email,
//         password,
//       });

//       alert(res.data.message || "Signup successful 🚀");

//       navigate("/login");

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.error || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="profilePage">
//       <div className="container">
//         <div className="card">

//           <div className="profile-pic"></div>

//           <h2>Create Account</h2>
//           <p className="joined">Join us today 🚀</p>

//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

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

//           <button
//             onClick={handleSignup}
//             disabled={loading}
//             className="btn"
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>

//           <p className="joined" style={{ marginTop: "15px" }}>
//             Already have an account?{" "}
//             <Link to="/login">Login</Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;






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
              style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}>
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