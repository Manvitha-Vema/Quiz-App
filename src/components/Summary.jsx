import quizComplete from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswer }) {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizComplete} />
      <h2>Quiz is completed</h2>
      <div id="summary-stats">
        <p>
          <span>{skippedAnswersShare}%</span>
          <span>Skipped</span>
        </p>
        <p>
          <span>{correctAnswersShare}%</span>
          <span>Answered correctly</span>
        </p>
        <p>
          <span>{wrongAnswersShare}%</span>
          <span>Answered wrongly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer === null ? "skipped" : answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
