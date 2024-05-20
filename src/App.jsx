import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizStart from "./components/QuizStart";
import { useState } from "react";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  return (
    <>
      <Header />
      {/* <Quiz /> */}\
      {!showQuiz ? <QuizStart onStart={handleStartQuiz} /> : <Quiz />}
    </>
  );
}

export default App;
