import {reducer, ActionCreator} from './reducer.js';

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: `INCREMENT_STEP`,
      payload: 1,
    });
  });

  it(`Action crator for incrementing mistake returns action with 0 payload`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `correct`,
      picture: ``,
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        },
        {
          artist: `incorrect`,
          picture: ``,
        },
      ]
    }, 0, Infinity)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 0,
    });
  });

  it(`Action crator for incrementing mistake returns action with 1 payload`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `incorrect`,
      picture: ``,
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        },
        {
          artist: `incorrect`,
          picture: ``,
        },
      ]
    }, 0, Infinity)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 1,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    }, {
      type: `INCREMENT_STEP`,
      payload: 1,
    })).toEqual({
      step: 0,
      mistakes: 0,
      gameTime: 60,
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    }, {
      type: `INCREMENT_STEP`,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 1,
    })).toEqual({
      step: -1,
      mistakes: 1,
      gameTime: 60,
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 0
    })).toEqual({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      step: 20,
      mistakes: 10,
      gameTime: 60,
    }, {
      type: `RESET`,
    })).toEqual({
      step: -1,
      mistakes: 0,
      gameTime: 60,
    });
  });
});
