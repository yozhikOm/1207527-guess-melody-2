const isArtistAnswerCorrect = (userAnswer, question) =>
  userAnswer.artist === question.song.artist;

const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));

const ActionCreator = {

  incrementStep: () => ({
    type: `INCREMENT_STEP`,
    payload: 1,
  }),

  incrementMistake: (userAnswer, question, mistakes, maxMistakes) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: `RESET`,
      };
    }

    return {
      type: `INCREMENT_MISTAKES`,
      payload: answerIsCorrect ? 0 : 1
    };

  },

  /* decrementTime: () => ({
    type: `DECREMENT_TIME`,
    payload: 1,
  }), */

  storeRemainingTime: (gameTime) => ({
    type: `STORE_REMAINING_TIME`,
    payload: gameTime,
  }),

  resetGame: () => ({
    type: `RESET`
  }),

  stopGame: () => ({
    type: `STOP_GAME`
  }),
};

const initialState = {
  gameTime: 60,
  step: -1,
  mistakes: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload,
    });

      /* case `DECREMENT_TIME`: return Object.assign({}, state, {
      gameTime: state.gameTime - action.payload,
    }); */

    case `STORE_REMAINING_TIME`: return Object.assign({}, state, {
      gameTime: action.payload,
    });

    case `RESET`: return Object.assign({}, initialState);

    case `STOP_GAME`: return Object.assign({}, state, {
      gameTime: initialState.gameTime,
      mistakes: initialState.mistakes,
      step: -2,
    });
  }

  return state;
};

export {
  ActionCreator,
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
  reducer,
};
