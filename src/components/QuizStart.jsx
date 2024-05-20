import React from "react";
function QuizStart({ onStart }) {
  return (
    <div className="quizContainer-start">
      <h1 className="title-start">Ready to Start Quiz?</h1>
      <button onClick={onStart} className="button-start">
        Yes
      </button>
    </div>
  );
}

export default QuizStart;
