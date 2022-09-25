import { useState } from "react";
import bgPatternMobile from "./assets/images/bg-pattern-mobile.svg";
import illustrationWomanMobile from "./assets/images/illustration-woman-online-mobile.svg";

function App() {
  var questions = [
    {
      title: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      title: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      title: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      title: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <main className="card__wrapper">
      <section className="card">
        <picture className="card__picture">
          <img className="card__bg-pattern" src={bgPatternMobile} alt="" />
          <img
            className="card__illustration"
            src={illustrationWomanMobile}
            alt=""
          />
        </picture>
        <div className="card__container">
          <h1 className="card__title">FAQ</h1>
          <ul className="card__list">
            {questions.map(function (question, index) {
              return (
                <li key={index} className="card__list-li">
                  <details className="question">
                    <summary className="question__title">
                      {question.title}
                    </summary>
                    <p className="question__answer">{question.answer}</p>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
