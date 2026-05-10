import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../api/authApi";
import "../styles/Profile.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!email) {
      setMessage("⚠️ Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await forgotPassword({ email });

      const successMsg =
        typeof res.data?.message === "string"
          ? res.data.message
          : "Reset link sent successfully 📩";

      setMessage(successMsg);

    } catch (err) {
      console.error("Forgot password error:", err);

      const errorMsg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to send reset link";

      setMessage(errorMsg);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          <h2>Reset Password</h2>
          <p className="joined">
            Enter your email and we’ll send a reset link
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
          />

          <button
            onClick={handleReset}
            className="btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color:
                  message.includes("Failed") || message.includes("⚠️")
                    ? "red"
                    : "green",
              }}
            >
              {message}
            </p>
          )}

          <p className="joined" style={{ marginTop: "15px" }}>
            <Link to="/login" style={{ color: "#9e024b" }}>
              Back to Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;