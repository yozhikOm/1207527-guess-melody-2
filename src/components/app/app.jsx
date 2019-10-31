import * as React from 'react';
import PropTypes from "prop-types";
import {PureComponent} from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import {GenreQuestionScreen} from '../genre-question-screen/genre-question-screen.jsx';
import {ArtistQuestionScreen} from '../artist-question-screen/artist-question-screen.jsx';

class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currQuestion = questions[question];

    switch (currQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        question={currQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={currQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      // gameTime,
      // errorCount,
      questions,
    } = this.props;

    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number, // .isRequired,
  errorCount: PropTypes.number, // .isRequired,
  onStartButtonClick: PropTypes.func,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        genre: PropTypes.string,
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string,
              genre: PropTypes.string,
            }).isRequired
        ).isRequired,
      }).isRequired
  ) // .isRequired,
};

export {App};

