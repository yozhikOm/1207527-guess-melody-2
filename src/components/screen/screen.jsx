import React from 'react';
import PropTypes from "prop-types";
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import {GenreQuestionScreen} from '../genre-question-screen/genre-question-screen.jsx';
import {ArtistQuestionScreen} from '../artist-question-screen/artist-question-screen.jsx';
import {GameOverScreen} from '../game-over-screen/game-over-screen.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.js';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.js';

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

const Screen = ({gameSettings, question, mistakes, step, onWelcomeScreenClick, onUserAnswer}) => {
  const {
    gameTime,
    errorCount,
  } = gameSettings;

  if (step === -2) {
    return <GameOverScreen
      onStartButtonClick={onWelcomeScreenClick}
    />;
  }

  // if (!question) {
  if (step === -1) {
    return <WelcomeScreen
      gameTime={gameTime}
      errorCount={errorCount}
      onStartButtonClick={onWelcomeScreenClick}
    />;
  }

  switch (question.type) {
    case `genre`: return <GenreQuestionScreenWrapped

      question={question}
      onAnswer={(userAnswer) => onUserAnswer(
          userAnswer,
          question,
          mistakes,
          errorCount
      )}
    />;

    case `artist`: return <ArtistQuestionScreenWrapped
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
  step: PropTypes.number.isRequired,
};

export {Screen};
