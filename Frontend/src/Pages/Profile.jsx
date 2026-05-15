// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Profile.css";

// const Profile = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSave = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch("http://localhost:9090/user/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           currentPassword,
//           newPassword,
//         }),
//       });

//       const data = await res.text();

//       if (data.startsWith("ERROR")) {
//         alert(data);
//       } else {
//         alert("Profile updated successfully 🚀");
//         navigate("/"); // better than /home unless route exists
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     }
//   };

//   return (
//     <div className="profilePage">
//       <div className="container">
//         <div className="card">
//           <div className="profile-pic"></div>

//           <h2>Profile</h2>
//           <p className="joined">Update your details</p>

//           <form onSubmit={handleSave}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             <div className="input-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Current Password"
//                 value={currentPassword}
//                 onChange={(e) => setCurrentPassword(e.target.value)}
//               />
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="btn">
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
const API_URL = process.env.REACT_APP_API_URL;

const Profile = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // FETCH USER PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${API_URL}/user/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        setUserData({
          username: data.username || "",
          email: data.email || "",
        });
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  // HANDLE INPUT CHANGE (USER INFO)
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // HANDLE PASSWORD CHANGE
  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE PROFILE
  const handleSave = async (e) => {
    e.preventDefault();

    if (
      passwordData.newPassword &&
      passwordData.newPassword !== passwordData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const data = await res.text();

      if (data.startsWith("ERROR")) {
        alert(data);
      } else {
        alert("Profile updated successfully 🚀");
        setIsEditing(false);
        navigate("/profile");
      }
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          {/* PROFILE IMAGE */}
          <div className="profile-pic"></div>

          <h2 className="profile-title">My Profile</h2>
          <p className="joined">Manage your account details</p>

          {/* VIEW MODE */}
          {!isEditing && (
            <div className="profile-view">
              <div className="view-item">
                <label>Username</label>
                <p>{userData.username}</p>
              </div>

              <div className="view-item">
                <label>Email</label>
                <p>{userData.email}</p>
              </div>

              <button
                className="btn edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          )}

          {/* EDIT MODE */}
          {isEditing && (
            <form onSubmit={handleSave} className="profile-form">

              <div className="input-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="btn-row">
                <button type="submit" className="btn save-btn">
                  Save Changes
                </button>

                <button
                  type="button"
                  className="btn cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default Profile;