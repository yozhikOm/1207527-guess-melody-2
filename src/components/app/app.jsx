import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import {Header} from '../header/header.jsx';
import {Screen} from '../screen/screen.jsx';

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};

class App extends PureComponent {
  /* constructor(props) {
    super(props);

    this.state = {
      questionIndex: -1,
    };
  }*/

  /* _incrementQIndex() {
    const {questionIndex} = this.state;

    this.setState({
      questionIndex: questionIndex + 1 >= this.props.questions.length
        ? -1
        : questionIndex + 1,
    });
  }*/

  render() {
    /* const {
      gameTime,
      errorCount,
    } = this.props;*/

    /* const {questions} = this.props;
    const {questionIndex} = this.state;

    const question = questions[questionIndex];
    const gameSettings = ({gameTime}, {errorCount});*/
    
    // const {questions, gameTime, errorCount, step, mistakes, onUserAnswer} = this.props;
    const {questions, gameTime, errorCount, onWelcomeScreenClick, step, onUserAnswer} = this.props;
    const question = questions[step];
    const gameSettings = ({gameTime}, {errorCount});

    return <section className={`game ${Type.ARTIST}`}>
      {step !== -1 && <Header/>}

      <Screen gameSettings={gameSettings} question={question} onWelcomeScreenClick={onWelcomeScreenClick} onUserAnswer={onUserAnswer}/>

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
  gameTime: state.gameTime
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
