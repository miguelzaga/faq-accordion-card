import { useState } from "react";

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
    <main>
      <section>
        <img src="" alt="" />
        <div>
          <h2>FAQ</h2>
          <ul>
            {questions.map(function (question, index) {
              return (
                <li key={index}>
                  <details>
                    <summary>{question.title}</summary>
                    <p>{question.answer}</p>
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
