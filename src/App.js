import { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h3> سوالات پر تکرار</h3>
      <div className="info">
        {questions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
