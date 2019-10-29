import {PureComponent} from 'react';
import * as React from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      gameTime,
      errorCount,
      questions,
    } = this.props;

    const {question} = this.state;

    return this._getScreen(question, () => {
      this.setState((prevState) => ({
        prevState,
        questions: prevState.question + 1,
      }));
    });
  }

  _getScreen(question, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = this.props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = this.props;
    return <div>
        Игра на вопрос типа {questions[question].type}
    </div>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number, // .isRequired,
  errorCount: PropTypes.number, // .isRequired,
  onStartButtonClick: PropTypes.func,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string.isRequired,
              genre: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
      }).isRequired
  ) // .isRequired,
};

export {App};

