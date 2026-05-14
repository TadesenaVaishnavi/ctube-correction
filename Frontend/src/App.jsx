// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./Pages/Home";
// import Profile from "./Pages/Profile";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import ForgotPassword from "./Pages/ForgotPassword";
// import VideoPage from "./Pages/VideoPage";
// import WatchPage from "./Pages/WatchPage";
// import Channelpage from "./Pages/Channelpage";

// import Subscriptions from "./Pages/Subscriptions";
// import History from "./Pages/History";
// import WatchLater from "./Pages/WatchLater";
// import LikedVideos from "./Pages/LikedVideos";

// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// export default function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Default route */}
//         <Route path="/" element={<Navigate to="/login" />} />

//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected Routes */}
//         <Route path="/home" element={
//           <ProtectedRoute><Home /></ProtectedRoute>
//         } />

//         <Route path="/profile" element={
//           <ProtectedRoute><Profile /></ProtectedRoute>
//         } />

//         <Route path="/video" element={
//           <ProtectedRoute><VideoPage /></ProtectedRoute>
//         } />

//         <Route path="/watch" element={
//           <ProtectedRoute><WatchPage /></ProtectedRoute>
//         } />

//         <Route path="/channel" element={
//           <ProtectedRoute><Channelpage /></ProtectedRoute>
//         } />

//         <Route path="/subscriptions" element={
//           <ProtectedRoute><Subscriptions /></ProtectedRoute>
//         } />

//         <Route path="/history" element={
//           <ProtectedRoute><History /></ProtectedRoute>
//         } />

//         <Route path="/watchlater" element={
//           <ProtectedRoute><WatchLater /></ProtectedRoute>
//         } />

//         <Route path="/liked" element={
//           <ProtectedRoute><LikedVideos /></ProtectedRoute>
//         } />

//       </Routes>
//     </Router>
//   );
// }



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import VideoPage from "./Pages/VideoPage";
import WatchPage from "./Pages/WatchPage";
import Channelpage from "./Pages/Channelpage";

import Subscriptions from "./Pages/Subscriptions";
import History from "./Pages/History";
import WatchLater from "./Pages/WatchLater";
import LikedVideos from "./Pages/LikedVideos";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Default route */}
        {/* <Route path="/"element={localStorage.getItem("token") ? (<Navigate to="/home" />) : (<Navigate to="/login" />)}/> */}
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } /> */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/video/:id" element={<ProtectedRoute><VideoPage /></ProtectedRoute>} />
        <Route path="/watch" element={<ProtectedRoute><WatchPage /></ProtectedRoute>} />
        <Route path="/channel" element={<ProtectedRoute><Channelpage /></ProtectedRoute>} />
        <Route path="/subscriptions" element={<ProtectedRoute><Subscriptions /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/watchlater" element={<ProtectedRoute><WatchLater /></ProtectedRoute>} />
        <Route path="/liked" element={<ProtectedRoute><LikedVideos /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./Pages/Home";
// import Profile from "./Pages/Profile";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import ForgotPassword from "./Pages/ForgotPassword";
// import VideoPage from "./Pages/VideoPage";
// import WatchPage from "./Pages/WatchPage";
// import Channelpage from "./Pages/Channelpage";

// import Subscriptions from "./Pages/Subscriptions";
// import History from "./Pages/History";
// import WatchLater from "./Pages/WatchLater";
// import LikedVideos from "./Pages/LikedVideos";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Default route */}
//         <Route path="/" element={<Navigate to="/login" />} />
// {/* 
//         // <Route path="/home" element={<Home />} /> */}
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot" element={<ForgotPassword />} />
//         <Route path="/video:id" element={<VideoPage />} />
//         <Route path="/watch" element={<WatchPage />} />
//         <Route path="/channel" element={<Channelpage />} />
//         <Route path="/subscriptions" element={<Subscriptions />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/watchlater" element={<WatchLater />} />
//         <Route path="/liked" element={<LikedVideos />} />
//       </Routes>
//     </Router>
//   );
// }



// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./Pages/Home";
// import Profile from "./Pages/Profile";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import ForgotPassword from "./Pages/ForgotPassword";
// import VideoPage from "./Pages/VideoPage";
// import WatchPage from "./Pages/WatchPage";
// import Channelpage from "./Pages/Channelpage";

// import Subscriptions from "./Pages/Subscriptions";
// import History from "./Pages/History";
// import WatchLater from "./Pages/WatchLater";
// import LikedVideos from "./Pages/LikedVideos";


// import ProtectedRoute from "./components/ProtectedRoute";

// // ✅ Check login (token exists or not)
// const isAuthenticated = () => {
//   return localStorage.getItem("token") !== null;
// };

// // ✅ Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };

// export default function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Default route */}
//         <Route path="/" element={<Navigate to="/login" />} />

//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot" element={<ForgotPassword />} />

//         {/* Protected Routes */}
//         <Route path="/home" element={
//           <ProtectedRoute>
//             <Home />
//           </ProtectedRoute>
//         } />

//         <Route path="/profile" element={
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         } />

//         <Route path="/video" element={
//           <ProtectedRoute>
//             <VideoPage />
//           </ProtectedRoute>
//         } />

//         <Route path="/watch" element={
//           <ProtectedRoute>
//             <WatchPage />
//           </ProtectedRoute>
//         } />

//         <Route path="/channel" element={
//           <ProtectedRoute>
//             <Channelpage />
//           </ProtectedRoute>
//         } />

//         <Route path="/subscriptions" element={
//           <ProtectedRoute>
//             <Subscriptions />
//           </ProtectedRoute>
//         } />

//         <Route path="/history" element={
//           <ProtectedRoute>
//             <History />
//           </ProtectedRoute>
//         } />

//         <Route path="/watchlater" element={
//           <ProtectedRoute>
//             <WatchLater />
//           </ProtectedRoute>
//         } />

//         <Route path="/liked" element={
//           <ProtectedRoute>
//             <LikedVideos />
//           </ProtectedRoute>
//         } />

//       </Routes>
//     </Router>
//   );
// }


// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./Pages/Home";
// import Profile from "./Pages/Profile";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import ForgotPassword from "./Pages/ForgotPassword";
// import VideoPage from "./Pages/VideoPage";
// import WatchPage from "./Pages/WatchPage";
// import Channelpage from "./Pages/Channelpage";
// import Subscriptions from "./Pages/Subscriptions";
// import History from "./Pages/History";
// import WatchLater from "./Pages/WatchLater";
// import LikedVideos from "./Pages/LikedVideos";

// export default function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Default → go to Home directly */}
//         <Route path="/" element={<Home />} />

//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot" element={<ForgotPassword />} />

//         {/* All pages OPEN (no protection) */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/video" element={<VideoPage />} />
//         <Route path="/watch" element={<WatchPage />} />
//         <Route path="/channel" element={<Channelpage />} />
//         <Route path="/subscriptions" element={<Subscriptions />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/watchlater" element={<WatchLater />} />
//         <Route path="/liked" element={<LikedVideos />} />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" />} />

//       </Routes>
//     </Router>
//   );
// }
