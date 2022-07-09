import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

function Question({ title, info }) {
  const [showData, setShowData] = useState(false);
  return (
    <div className="question">
      <header>
        <h4> {title}</h4>
        <button onClick={() => setShowData(!showData)}>
          {showData ? <FaSortDown /> : <FaSortUp />}
        </button>
      </header>
      {showData && <p> {info}</p>}
    </div>
  );
}

export default Question;
