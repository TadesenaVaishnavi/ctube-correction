import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Profile.css";

const API = import.meta.env.VITE_API_URL;

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e?.preventDefault(); // prevents form reload if wrapped in form

    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/auth/register`, {
        username,
        email,
        password,
      });

      console.log("Signup response:", res.data);

      // ✅ SAFE message handling (prevents [object Object])
      const message =
        typeof res.data?.message === "string"
          ? res.data.message
          : "Signup successful 🚀";

      alert(message);

      navigate("/login");

    } catch (err) {
      console.error("Signup error:", err);

      const errorMsg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Signup failed";

      alert(errorMsg);

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
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <button
            onClick={handleSignup}
            disabled={loading}
            className="btn"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="joined" style={{ marginTop: "15px" }}>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;

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