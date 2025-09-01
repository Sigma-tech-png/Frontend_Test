import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Главная страница</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={() => navigate("/about")}
      >
        Перейти на страницу "Обо мне"
      </button>
    </div>
  );
}

export default Home;