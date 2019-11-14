import React from 'react';
import PropTypes from "prop-types";
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import {GenreQuestionScreen} from '../genre-question-screen/genre-question-screen.jsx';
import {ArtistQuestionScreen} from '../artist-question-screen/artist-question-screen.jsx';

const Screen = ({gameSettings, question, mistakes, onWelcomeScreenClick, onUserAnswer}) => {
  const {
    gameTime,
    errorCount,
  } = gameSettings;

  if (!question) {
    return <WelcomeScreen
      gameTime={gameTime}
      errorCount={errorCount}
      onStartButtonClick={onWelcomeScreenClick}
    />;
  }

  switch (question.type) {
    case `genre`: return <GenreQuestionScreen
      question={question}
      onAnswer={(userAnswer) => onUserAnswer(
          userAnswer,
          question,
          mistakes,
          errorCount
      )}
    />;

    case `artist`: return <ArtistQuestionScreen
      question={question}
      onAnswer={(userAnswer) => onUserAnswer(
          userAnswer,
          question,
          mistakes,
          errorCount
      )}
    />;
  }

  return null;
};

Screen.propTypes = {
  gameSettings: PropTypes.shape({
    gameTime: PropTypes.number,
    errorCount: PropTypes.number,
  }),
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          genre: PropTypes.string,
        }).isRequired
    ).isRequired,
  }),
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func,
  mistakes: PropTypes.number.isRequired,
};

export {Screen};
