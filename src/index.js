import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {compose} from "recompose";
import App from './components/app/app.jsx';
import {createAPI} from './api';
// import {questions} from './mocks/questions.js';
import {reducer, Operation} from "./reducer.js";

const init = () => {
  const settings = {
    errorCount: 2,
  };

  const api = createAPI((...args) => store.dispatch(...args));

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  /* eslint-enable */

  store.dispatch(Operation.loadQuestions());


  /* const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );*/

  ReactDOM.render(<Provider store={store}>
    <App
      errorCount={settings.errorCount}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
