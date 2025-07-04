// src/components/Card.jsx
import React from "react";

function Card(props) {
  console.log(props);

  // Component function name must start with a capital letter
  return (
    // Add a className to the outermost div for easier CSS targeting
    <div className="card-container">
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">class Warfare</span>
          <span className="font-medium text-sky-500">
            {props.username || "randomBhaiya"}
          </span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card; // Export the capitalized component
