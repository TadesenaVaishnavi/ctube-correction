import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";

import "../styles/VideoPage.css";

export default function VideoPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================
  // FETCH VIDEO (IMPORTANT FIX)
  // =====================================
  useEffect(() => {
    fetchVideo();
  }, [id]);

  const fetchVideo = async () => {
    // try {
    //   const res = await axios.get(
    //     `https://your-backend.onrender.com/api/ctube/videos/${id}`
    //   );
    try {
      const dummyVideo = {
        title: "Sample Video",
        channelName: "My Channel",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        views: 1000
      };

      setVideo(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // RECOMMENDED VIDEOS (STATIC FOR NOW)
  // =====================================
  const recommendedVideos = [
    {
      id: "r1",
      thumbnail:
        "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      title: "Never Gonna Give You Up",
      channelName: "Rick Astley",
      videoUrl:
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "r2",
      thumbnail:
        "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      title: "Big Buck Bunny",
      channelName: "Blender",
      videoUrl:
        "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      id: "r3",
      thumbnail:
        "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      title: "Me at the zoo",
      channelName: "Jawed",
      videoUrl:
        "https://www.youtube.com/embed/jNQXAC9IVRw",
    },
  ];

  // =====================================
  // LOADING
  // =====================================
  if (loading) {
    return (
      <div className="videoPage center">
        Loading video...
      </div>
    );
  }

  // =====================================
  // NO VIDEO
  // =====================================
  if (!video) {
    return (
      <div className="videoPage center">
        Video not found
      </div>
    );
  }

  return (
    <div className="videoPage">

      {/* LEFT SIDE */}
      <div className="videoLeft">

        {/* VIDEO PLAYER */}
        <div className="videoPlayer">
          {video.videoUrl?.includes("youtube") ? (
            <iframe
              width="100%"
              height="100%"
              src={video.videoUrl}
              title="video"
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
            >
              <source
                src={video.videoUrl}
                type="video/mp4"
              />
            </video>
          )}
        </div>

        {/* TITLE */}
        <h2 className="videoTitle">
          {video.title}
        </h2>

        {/* CHANNEL */}
        <div className="videoChannel">

          <div className="channelLeft">
            <div className="channelAvatar"></div>

            <div>
              <h4>{video.channelName}</h4>
              <p>{video.views || 0} views</p>
            </div>
          </div>

          <button className="subscribeBtn">
            Subscribe
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="videoRight">

        {recommendedVideos.map((item) => (
          <div
            key={item.id}
            className="recommendCard"
            onClick={() =>
              navigate(`/video/${item.id}`)
            }
          >

            <img
              src={item.thumbnail}
              alt="thumb"
            />

            <div>
              <h4>{item.title}</h4>
              <p>{item.channelName}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

