// import React, { useRef, useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// import "../styles/Home.css";

// // ✅ CONFIG
// const API = "http://localhost:9090";

// export default function Home() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const fileInputRef = useRef();

//   // =====================================
//   // STATIC VIDEOS
//   // =====================================
//   const staticVideos = [
//     {
//       id: "1",
//       thumbnail:
//         "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
//       title: "Never Gonna Give You Up",
//       channelName: "Rick Astley",
//       videoUrl:
//         "https://www.youtube.com/embed/dQw4w9WgXcQ",
//       duration: 212,
//       views: 7000,
//     },
//   ];

//   // =====================================
//   // STATE
//   // =====================================
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // =====================================
//   // FETCH VIDEOS
//   // =====================================
//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const res = await axios.get(`${API}/api/ctube/videos`);

//       // ✅ merge once (no duplication)
//       setVideos([...staticVideos, ...res.data]);
//     } catch (error) {
//       console.log("Fetch error:", error);
//       setVideos(staticVideos);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================
//   // VIDEO UPLOAD
//   // =====================================
//   const handleVideoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "ctube_upload");

//       // 🔥 CLOUDINARY
//       const cloudinaryRes = await axios.post(
//         "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/video/upload",
//         formData
//       );

//       const videoData = {
//         title: file.name,
//         videoUrl: cloudinaryRes.data.secure_url,

//         // ✅ FIX thumbnail
//         thumbnail: cloudinaryRes.data.secure_url.replace(
//           ".mp4",
//           ".jpg"
//         ),

//         duration: cloudinaryRes.data.duration,
//         publicId: cloudinaryRes.data.public_id,
//         channelName: "My Channel",
//         views: 0,
//         likes: 0,
//       };

//       // 🔥 SAVE TO BACKEND
//       await axios.post(
//         `${API}/api/ctube/videos`,
//         videoData
//       );

//       await fetchVideos();

//       alert("Video uploaded successfully!");

//       // ✅ reset input (important)
//       fileInputRef.current.value = "";

//     } catch (error) {
//       console.log("Upload error:", error);
//       alert("Upload failed");
//     }
//   };

//   // =====================================
//   // FORMAT TIME
//   // =====================================
//   const formatDuration = (seconds) => {
//     if (!seconds) return "0:00";

//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);

//     return `${mins}:${secs < 10 ? "0" + secs : secs}`;
//   };

//   // =====================================
//   // LOADING
//   // =====================================
//   if (loading) {
//     return <div className="home">Loading...</div>;
//   }

//   return (
//     <div className="home">

//       {/* NAVBAR */}
//       <div className="navbar">

//         <div className="navLeft">
//           <img src="/icons/hamburger.png" alt="menu" />

//           <Link to="/">
//             <img
//               src="/logo/Circle.png"
//               alt="logo"
//               className="logo"
//             />
//           </Link>
//         </div>

//         {/* SEARCH */}
//         <div className="searchBar">
//           <input placeholder="Search..." />

//           <div className="searchIcons">
//             <img src="/icons/search.png" alt="" />
//             <img src="/icons/microphone-black-shape.png" alt="" />
//           </div>
//         </div>

//         {/* RIGHT NAV */}
//         <div className="navRight">

//           <div className="watchicons">

//             {/* FILE INPUT */}
//             <input
//               type="file"
//               accept="video/*"
//               ref={fileInputRef}
//               hidden
//               onChange={handleVideoUpload}
//             />

//             {/* UPLOAD */}
//             <img
//               src="/icons/video-camera.png"
//               alt="upload"
//               onClick={() => fileInputRef.current.click()}
//               style={{ cursor: "pointer" }}
//             />

//             <img src="/icons/bell.png" alt="" />

//             <img
//               src="/icons/join.png"
//               alt=""
//               onClick={() => navigate("/watch")}
//               style={{ cursor: "pointer" }}
//             />
//           </div>

//           <Link to="/profile">
//             <div className="profile"></div>
//           </Link>

//         </div>
//       </div>

//       <div className="main">

//         {/* SIDEBAR */}
//         <div className="sidebar">
//           <div className="menu">

//             {[
//               { path: "/", label: "Home", icon: "home.png" },
//               { path: "/subscriptions", label: "Subscriptions", icon: "subscriptions.png" },
//               { path: "/history", label: "History", icon: "history.png" },
//               { path: "/watchlater", label: "Watch later", icon: "clock.png" },
//               { path: "/liked", label: "Liked videos", icon: "like.png" },
//               { path: "/channelpage", label: "Channel", icon: "user.png" },
//             ].map((item) => (
//               <div
//                 key={item.path}
//                 className={`menu-item ${
//                   location.pathname === item.path ? "active" : ""
//                 }`}
//                 onClick={() => navigate(item.path)}
//               >
//                 <img src={`/icons/${item.icon}`} alt="" />
//                 <span>{item.label}</span>
//               </div>
//             ))}

//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="content">

//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="card"
//               onClick={() =>
//                 navigate(`/video/${video.id}`) // ✅ FIX (no state)
//               }
//             >

//               <div className="thumbnail">
//                 <img src={video.thumbnail} alt="" />
//                 <span>{formatDuration(video.duration)}</span>
//               </div>

//               <div className="videoInfo">
//                 <div className="avatar"></div>

//                 <div>
//                   <h4>{video.title}</h4>
//                   <p>{video.channelName}</p>
//                   <span>{video.views} views</span>
//                 </div>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useRef } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef();

  // ✅ CONNECTED TO BACKEND
  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    // ⚠️ must match Spring Boot params
    formData.append("file", file);
    formData.append("thumbnail", file); // temporary (same file)
    formData.append("title", file.name);

    try {
      const res = await axios.post(
        "https://your-backend-production.up.railway.app/api/ctube/videos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload success:", res.data);
      alert("Video uploaded successfully!");
    } catch (error) {
      console.log("Upload failed:", error);
      alert("Upload failed");
    }
  };

  // ✅ Static video data (for now)
  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      title: "Never Gonna Give You Up",
      channel: "Rick Astley",
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      title: "Big Buck Bunny",
      channel: "Blender",
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      title: "Me at the zoo",
      channel: "Jawed",
    },
    {
      id: 4,
      thumbnail: "https://picsum.photos/300/180?random=1",
      title: "Sample Video 1",
      channel: "My Channel",
    },
    {
      id: 5,
      thumbnail: "https://picsum.photos/300/180?random=2",
      title: "Sample Video 2",
      channel: "My Channel",
    },
    {
      id: 6,
      thumbnail: "https://picsum.photos/300/180?random=3",
      title: "Sample Video 3",
      channel: "My Channel",
    },
  ];

  return (
    <div className="home">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navLeft">
          <img src="/icons/hamburger.png" alt="menu" />

          <Link to="/">
            <img src="/logo/Circle.png" alt="logo" className="logo" />
          </Link>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Type something ..." />
          <div className="searchIcons">
            <img src="/icons/search.png" alt="search" />
            <img src="/icons/microphone-black-shape.png" alt="mic" />
          </div>
        </div>

        <div className="navRight">
          <div className="watchicons">

            {/* HIDDEN FILE INPUT */}
            <input
              type="file"
              accept="video/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleVideoUpload}
            />

            {/* UPLOAD ICON */}
            <img
              src="/icons/video-camera.png"
              alt="upload"
              onClick={() => fileInputRef.current.click()}
              style={{ cursor: "pointer" }}
            />

            <img src="/icons/bell.png" alt="bell" />

            <img
              src="/icons/join.png"
              alt="watch"
              onClick={() => navigate("/watch")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <Link to="/profile">
            <div className="profile"></div>
          </Link>
        </div>
      </div>

      <div className="main">
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="menu">
            <div
              className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => navigate("/")}>
              <img src="/icons/home.png" alt="" />
              <span>Home</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/subscriptions" ? "active" : ""
              }`}
              onClick={() => navigate("/subscriptions")}>
              <img src="/icons/subscriptions.png" alt="" />
              <span>Subscriptions</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/history" ? "active" : ""
              }`}
              onClick={() => navigate("/history")}>
              <img src="/icons/history.png" alt="" />
              <span>History</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/watchlater" ? "active" : ""
              }`}
              onClick={() => navigate("/watchlater")}>
              <img src="/icons/clock.png" alt="" />
              <span>Watch later</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/liked" ? "active" : ""
              }`}
              onClick={() => navigate("/liked")}>
              <img src="/icons/like.png" alt="" />
              <span>Liked videos</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/channelpage" ? "active" : ""
              }`}
              onClick={() => navigate("/channelpage")}>
              <img src="/icons/user.png" alt="" />
              <span>Channel</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {videos.map((video) => (
            <div
              key={video.id}
              className="card"
              onClick={() => navigate(`/video/${video.id}`)}>
              
              <div className="thumbnail">
                <img src={video.thumbnail} alt="thumbnail" />
                <span>7:32</span>
              </div>

              <div className="videoInfo">
                <div className="avatar"></div>

                <div>
                  <h4>{video.title}</h4>
                  <p>{video.channel}</p>
                  <span>7k views • 2 days ago</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}