import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

import {Header} from '../header/header.jsx';
import {Screen} from '../screen/screen.jsx';

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};

class App extends PureComponent {
  render() {
    const {questions, gameTime, errorCount, mistakes, step, onWelcomeScreenClick, onUserAnswer, storeRemainingTime, onTimeExpired} = this.props;
    const question = questions[step];

    const gameSettings = {
      gameTime,
      errorCount,
    };

    return <section className={`game ${Type.ARTIST}`}>
      {step !== -1 && step !== -2 &&
      <Header
        gameTime={gameTime}
        mistakes={mistakes}
        storeRemainingTime={storeRemainingTime}
        onTimeExpired={onTimeExpired}
      />}

      <Screen
        gameSettings={gameSettings}
        question={question}
        mistakes={mistakes}
        step={step}
        onWelcomeScreenClick={onWelcomeScreenClick}
        onUserAnswer={onUserAnswer}
      />

    </section>;
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  // onTimerTick: PropTypes.func.isRequired,
  storeRemainingTime: PropTypes.func.isRequired,
  onTimeExpired: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  gameTime: state.gameTime,
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => {
    dispatch(ActionCreator.resetGame());
    dispatch(ActionCreator.incrementStep());
  },

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  },

  // onTimerTick: () => dispatch(ActionCreator.decrementTime()),
  storeRemainingTime: (gameTime) => dispatch(ActionCreator.storeRemainingTime(gameTime)),
  onTimeExpired: () => dispatch(ActionCreator.stopGame()),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
