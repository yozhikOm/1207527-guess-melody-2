import {createStore} from "redux";
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {questions} from './mocks/questions.js';
import {reducer} from "./reducer.js";

const init = (gameQuestions) => {
  // const store = createStore(reducer);
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  const settings = {
    errorCount: 2,
  };

  ReactDOM.render(<Provider store={store}>
    <App
      errorCount={settings.errorCount}
      questions={gameQuestions}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(questions);
