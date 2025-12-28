import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ background: "#333", padding: "10px" }}>
      {token && (
        <>
          <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>
            Dashboard
          </Link>

          <Link to="/courses" style={{ color: "white", marginRight: "15px" }}>
            Courses
          </Link>

          <button onClick={logout}>Logout</button>
        </>
      )}

      {!token && (
        <>
          <Link to="/login" style={{ color: "white", marginRight: "15px" }}>
            Login
          </Link>
          <Link to="/register" style={{ color: "white" }}>
            Register
          </Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
