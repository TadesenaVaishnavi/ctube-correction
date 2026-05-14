// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/Channelpage.css";

// const ChannelPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="channelContainer">

//       {/* NAVBAR */}
//       <div className="channelNavbar">

//         <div className="channelNavLeft">
//           <img src="/icons/hamburger.png" alt="" />
//           <img src="/icons/Circle.png" alt="" className="channelLogo" />
//         </div>

//         <div className="channelSearchWrapper">
//           <input type="text" placeholder="Type something ..." />

//           <div className="channelSearchIcons">
//             <img src="/icons/search.png" alt="" />
//             <div className="divider"></div>
//             <img src="/icons/microphone-black-shape.png" alt="" />
//           </div>
//         </div>

//         <div className="channelNavRight">
//           <div className="channelIconGroup">
//             <img src="/icons/group.png" alt="" />
//             <img src="/icons/bell.png" alt="" />

//             <img
//               src="/icons/video-camera.png"
//               alt=""
//               onClick={() => navigate("/watch")}
//             />
//           </div>

//           <Link to="/profile">
//             <div className="channelprofile"></div>
//           </Link>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="channelContent">

//         {/* SIDEBAR */}
//         <div className="channelSidebar">

//           <div className="menuItem active" onClick={() => navigate("/")}>
//             <img src="/icons/home.png" alt="" />
//             <span>Home</span>
//           </div>

//           <div className="menuItem">
//             <img src="/icons/subscriptions.png" alt="" />
//             <span>Subscriptions</span>
//           </div>

//           <div className="menuItem">
//             <img src="/icons/history.png" alt="" />
//             <span>History</span>
//           </div>

//           <div className="menuItem">
//             <img src="/icons/clock.png" alt="" />
//             <span>Watch later</span>
//           </div>

//           <div className="menuItem">
//             <img src="/icons/like.png" alt="" />
//             <span>Liked videos</span>
//           </div>

//         </div>

//         {/* MAIN */}
//         <div className="channelMain">

//           {/* BANNER */}
//           <div className="channelBanner">
//             <img src="https://picsum.photos/1200/300" alt="" />
//           </div>

//           {/* CHANNEL INFO */}
//           <div className="channelInfo">
//             <img
//               src="https://picsum.photos/200"
//               className="channelAvatar"
//               alt=""
//             />

//             <div className="channelText">
//               <h1>CHANNEL NAME</h1>
//               <p>1,432 Subscribers</p>
//               <button>Subscribe</button>
//             </div>
//           </div>

//           {/* VIDEOS */}
//           <div className="videoGrid">
//             {[1].map((item) => (
//               <div className="videoCard" key={item}>
//                 <img src="https://picsum.photos/300/180" alt="" />
//                 <h4>Title of the video</h4>
//                 <p>Channel Name</p>
//                 <span>7,382 views • 2 years ago</span>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChannelPage;


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Layout.css"; // common CSS

const ChannelPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="home">

      {/* ✅ SAME NAVBAR */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="main">

        {/* ✅ SAME SIDEBAR */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* ✅ ONLY CHANNEL CONTENT */}
        <div className="content">

          {/* BANNER */}
          <div className="channelBanner">
            <img src="https://picsum.photos/1200/300" alt="" />
          </div>

          {/* CHANNEL INFO */}
          <div className="channelInfo">
            <img
              src="https://picsum.photos/200"
              className="channelAvatar"
              alt=""
            />

            <div className="channelText">
              <h1>CHANNEL NAME</h1>
              <p>1,432 Subscribers</p>
              <button>Subscribe</button>
            </div>
          </div>

          {/* VIDEOS */}
          <div className="videoGrid">
            {[1, 2, 3].map((item) => (
              <div className="videoCard" key={item}>
                <img src={`https://picsum.photos/300/180?random=${item}`} alt="" />
                <h4>Title of the video</h4>
                <p>Channel Name</p>
                <span>7,382 views • 2 years ago</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChannelPage;