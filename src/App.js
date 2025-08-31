import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_KEY}/api/data`)
      .then((res) => res.json())
      .then((json) => setData(json.message));
  }, []);

  return <div>{data}</div>;
}

export default App;