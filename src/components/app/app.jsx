import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import {GenreQuestionScreen} from '../genre-question-screen/genre-question-screen.jsx';
import {ArtistQuestionScreen} from '../artist-question-screen/artist-question-screen.jsx';
import {Header} from '../header/header.jsx';

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      questionIndex: -1,
    };
  }

  _getScreen(question, onUserAnswer) {
    if (!question) {

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

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    const {questionIndex} = this.state;

    return <section className={`game ${Type.ARTIST}`}>
      {this.state.questionIndex !== -1 && <Header/>}

      {this._getScreen(questions[questionIndex], () => {
        this.setState({
          questionIndex: questionIndex + 1 >= questions.length
            ? -1
            : questionIndex + 1,
        });
      })}
    </section>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
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
  ).isRequired,
};

export {App};

