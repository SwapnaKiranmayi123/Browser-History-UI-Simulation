import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [history, setHistory] = useState([]);

  const handleVisit = () => {
    if (url.trim() === "") return;

    setHistory((prev) => {
      // add to top if not already in history
      const filtered = prev.filter((item) => item !== url);
      return [url, ...filtered];
    });
    setUrl("");
  };

  return (
    <div style={styles.container}>
      <h1>🕒 Browser History Simulator</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          style={styles.input}
        />
        <button onClick={handleVisit} style={styles.button}>
          Visit
        </button>
      </div>

      <h2>Recently Visited URLs</h2>
      <ul>
        {history.map((u, index) => (
          <li key={index}>{u}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "250px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 12px",
  },
};

export default App;
