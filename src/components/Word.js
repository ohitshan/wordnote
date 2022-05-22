import React, { useState } from "react";

function Word(props) {
  const [word, setWord] = useState(props.word);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isChecked, setIsChecked] = useState(word.isChecked);

  const showToggle = () => {
    setShow(!show);
  };
  const checkToggle = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isChecked: !isChecked,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsChecked(!isChecked);
      }
    });
  };

  const del = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

  const onAnswer = (e) => {
    e.preventDefault();
    if (answer === word.kor) {
      checkToggle();
    }
  };

  const AnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <tr className={isChecked ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isChecked} onChange={checkToggle} />
      </td>
      <td>{word.eng}</td>
      <td>
        {!isChecked && show && word.kor}
        {isChecked && word.kor}
      </td>
      <td>
        <form onSubmit={onAnswer} className="word">
          <input
            placeholder="뜻"
            onChange={AnswerChange}
            value={answer}
            disabled={isChecked}
          />
        </form>
      </td>
      <td>
        {!isChecked && (
          <button onClick={showToggle}>{show ? "숨기기" : "보기"}</button>
        )}
        <button onClick={del}>삭제</button>
      </td>
    </tr>
  );
}

export default Word;
