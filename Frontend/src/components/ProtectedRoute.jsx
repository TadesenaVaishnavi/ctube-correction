// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   // const token = localStorage.getItem("token");

//   // return token ? children : <Navigate to="/login" />;
// }

// export default ProtectedRoute;

// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   // const token = localStorage.getItem("token");
//   const token = localStorage.setItem("token", token);

//   return token ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

const ProtectedRoute = ({ children }) => {
  return children; // ✅ allow all pages
};

export default ProtectedRoute;