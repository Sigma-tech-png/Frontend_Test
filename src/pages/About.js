import React, { useEffect, useState } from "react";

function About() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_KEY}/api/about`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Обо мне</h1>
      <p><strong>Имя:</strong> {info.name}</p>
      <p><strong>Описание:</strong> {info.description}</p>
    </div>
  );
}

export default About;