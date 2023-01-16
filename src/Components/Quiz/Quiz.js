import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ReactjsAlert from "reactjs-alert";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const Quiz = () => {
  const quiz = useLoaderData();
  const { questions, name, total, logo } = quiz.data;
  console.log(questions, name, total, logo);
  //   console.log(quiz);

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const right = () => {
    // Swal.fire("Right!", "Correct Answer Yah!", "success");
    toast.success("Right Answer!", {
      duration: 1500,
    });
    // alert("Right");
  };

  const wrong = () => {
    // Swal.fire("Wrong!", "Wrong Answer Yah!", "warning");
    toast.error("Wrong Answer!", {
      duration: 1500,
    });
    // alert("Wrong");
  };
  const [Ans, setAns] = useState(false);

  const handleCheck = (option, correctAnswer, id) => {
    if (correctAnswer === option) {
      setAns(true);
    } else {
      setAns(false);
    }
  };
  const handleRightAnswer = (answer) => {
    setStatus(true);
    setType("success");
    setTitle(answer);
  };
  return (
    <div>
      <img src={logo} alt={name} className="w-56 m-auto" />
      <h2>{name}</h2>
      {questions.map((item) => (
        <div className="border-spacing-5 w-7/12 m-auto shadow-lg bg-orange-200 my-4 p-5 rounded">
          <div className="flex">
            <h3 className="text-3xl">{item.question.slice(3, -4)}</h3>{" "}
            <span>
              <FontAwesomeIcon
                icon={faEye}
                onClick={() => handleRightAnswer(item.correctAnswer)}
              />
            </span>
          </div>
          <div className="list-decimal list-inside flex flex-col">
            {item.options.map((opt, idx) => (
              <div key={idx}>
                <label
                  className={
                    Ans
                      ? "border-4 border-gray-500 my-2 rounded text-2xl inline-block w-[90%]   mx-auto p-3"
                      : "border-4 border-gray-100 my-2 rounded text-2xl inline-block w-[90%]   mx-auto p-3"
                  }
                  htmlFor={opt}
                  onClick={() => handleCheck(opt, item.correctAnswer)}
                >
                  <input
                    type="radio"
                    name="option"
                    value={opt}
                    id={opt}
                    onChange={Ans ? right : wrong}
                    className="appearance-none"
                  />
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Toaster />
      <ReactjsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
    </div>
  );
};

export default Quiz;
