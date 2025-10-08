import React, { useState, useEffect } from "react";

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const [show, setShow] = useState(false);
  
  useEffect(() => {
      setShow(true);
    }, []);
  

  const items = [
    {
      label: "Contact Number",
      content: "+91 98765 43210"
    },
    {
      label: "Address",
      content: "123, React Street, Learning City, India"
    },
    {
      label: "Query",
      content: "For any queries, please email reactlearner@example.com"
    }
  ];

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <div className="w-100 min-vh-100 bg-white">
        <div className={`shadow-sm${show ? " show" : ""}`}>
          <h2>About This Project</h2>
          <p>This project is built to practice React concepts step by step.</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item, idx) => (
              <li key={item.label} style={{ marginBottom: "1em" }}>
                <button
                  onClick={() => toggleDropdown(idx)}
                  style={{
                    background: "#adb5bd",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "0.5em 1em",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  <span>{item.label}</span>
                  <span>{openIndex === idx ? "▲" : "▼"}</span>
                </button>
                {openIndex === idx && (
                  <div style={{
                    background: "#fff",
                    border: "1px solid #eee",
                    borderTop: "none",
                    padding: "0.75em 0 0.75em 1em"
                  }}>
                    {item.content}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
