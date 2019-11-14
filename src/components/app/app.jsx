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
    const {questions, gameTime, errorCount, mistakes, onWelcomeScreenClick, step, onUserAnswer} = this.props;
    const question = questions[step];
    const gameSettings = ({gameTime}, {errorCount});

    return <section className={`game ${Type.ARTIST}`}>
      {step !== -1 && <Header/>}

      <Screen gameSettings={gameSettings} question={question} mistakes={mistakes} onWelcomeScreenClick={onWelcomeScreenClick} onUserAnswer={onUserAnswer}/>

    </section>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
