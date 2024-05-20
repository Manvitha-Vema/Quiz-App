import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionId = userAnswer.length;
  const quizIsComplete = activeQuestionId === QUESTIONS.length;

  const handleClick = useCallback(function handleClick(selectedAnswer) {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipQuestion = useCallback(
    () => handleClick(null),
    [handleClick]
  );
  if (quizIsComplete) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionId}
        index={activeQuestionId}
        onSelectAnswer={handleClick}
        onSkipAnswer={handleSkipQuestion}
      />
    </div>
  );
}
