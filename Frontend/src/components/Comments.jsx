import React, { useState, useEffect } from "react";

const Comments = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  // ✅ FETCH COMMENTS
  const fetchComments = async () => {
    try {
      const res = await fetch(`${API_URL}/comments`);
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // ✅ ADD COMMENT
  const handleAddComment = async () => {
    if (!text) return;

    try {
      const token = localStorage.getItem("token");

      await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      setText("");
      fetchComments(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="comments">
      <h4>Comments</h4>

      {/* INPUT */}
      <div className="comment-box">
        <div className="avatar2"></div>
        <input
          placeholder="Type a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      {/* LIST */}
      {comments.map((c) => (
        <div className="comment" key={c.id}>
          <div className="avatar2"></div>
          <div>
            <p>{c.username}</p>
            <span>{c.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;