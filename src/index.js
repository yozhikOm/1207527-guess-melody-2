import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {questions} from './mocks/questions.js';

const init = (gameQuestions) => {
  const settings = {
    gameTime: 10,
    errorCount: 2,
    onClickStartButton: (() => {})
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
