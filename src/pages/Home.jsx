import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around", // Adjust as needed to control spacing
    marginBottom: "20px", // Added margin bottom for spacing
  };

  const buttonStyle = {
    flex: "1", // Each button takes equal space
    height: "10vh",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
    border: "2px solid black",
    fontSize: "1.2em",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    cursor: "pointer",
    outline: "none",
    overflow: "hidden", // Ensure text doesn't overflow when scaled on hover
    position: "relative", // Required for hover effects
    animation: "pulse 1s infinite", // Apply animation
  };

  const buttonHoverEffect = {
    transform: "scale(1.05)", // Scale up on hover
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Add shadow on hover
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };
  
  

  return (
    <div style={backgroundStyle}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Explore ❤</h1>

      <div style={buttonContainerStyle}>
        <Link to="/landingpage">
          <button style={{ ...buttonStyle, ...buttonHoverEffect }}>
            Visit Landing page
          </button>
        </Link>

        {/* Add more buttons here if needed */}
      </div>
    </div>
  );
};

export default Home;
