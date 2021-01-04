import React from 'react';
import { Answer } from './index';

function AnswersList(props) {
  return (
    <div className="c-grid__answer">
      {props.answers.map((answer, index) => {
        return <Answer content={answer.content} key={index.toString()} />;
      })}
    </div>
  );
}

export default AnswersList;
