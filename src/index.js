import {createStore} from "redux";
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {questions} from './mocks/questions.js';
import {reducer} from "./reducer.js";

const init = (gameQuestions) => {
  const store = createStore(reducer);

  const settings = {
    gameTime: 10,
    errorCount: 2,
    // onClickStartButton: (() => {})
  };

  ReactDOM.render(<Provider store={store}>
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={gameQuestions}
      />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions);
