import React, { useState } from "react";

const HistorySimulator = () => {
  const [url, setUrl] = useState("");
  const [history, setHistory] = useState([]);
  const [maxHistory, setMaxHistory] = useState(5);

  const visitPage = () => {
    if (!url.trim()) return;

    const newEntry = { url, timestamp: new Date() };

    // Remove any existing entry of this URL
    const filtered = history.filter((item) => item.url !== url);

    // Add to the front
    const updated = [newEntry, ...filtered];

    setHistory(updated);
    setUrl("");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getMostRecentHistory = () => {
    const unique = [];
    const seen = new Set();

    for (const item of history) {
      if (!seen.has(item.url)) {
        seen.add(item.url);
        unique.push(item);
      }
      if (unique.length >= maxHistory) break;
    }
    return unique;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Browser History Simulator</h2>

      {/* Input & Visit Button */}
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={visitPage} style={{ marginLeft: "10px" }}>
        Visit Page
      </button>

      {/* Configurable History Length */}
      <div style={{ marginTop: "10px" }}>
        <label>History Length (N): </label>
        <input
          type="number"
          min="1"
          value={maxHistory}
          onChange={(e) => setMaxHistory(parseInt(e.target.value))}
        />
      </div>

      {/* Clear History Button */}
      <button onClick={clearHistory} style={{ marginTop: "10px" }}>
        Clear History
      </button>

      {/* Recent History */}
      <h3 style={{ marginTop: "20px" }}>Recent History</h3>
      <ul>
        {getMostRecentHistory().map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>{" "}
            — {item.timestamp.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySimulator;
