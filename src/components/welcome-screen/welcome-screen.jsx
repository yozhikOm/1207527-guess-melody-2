import React from 'react';
import PropTypes from "prop-types";

const WelcomeScreen = (props) => {
  const {
    gameTime,
    errorCount,
    onStartButtonClick,
  } = props;

  let timeFormated = formatTime(gameTime);

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <button className="welcome__button" onClick={onStartButtonClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {timeFormated} нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorCount} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

function formatTime(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60) % 60;
  let seconds = Math.floor(timeInSeconds - minutes * 60);

  const time = {
    "minutes": minutes,
    "seconds": seconds
  };

  let timeFormated = time.minutes >= 10 ? time.minutes : `0${time.minutes}`;
  timeFormated += ` минут `;
  timeFormated += time.seconds >= 10 ? time.seconds : `0${time.seconds}`;
  timeFormated += ` секунд`;

  return timeFormated;
}

WelcomeScreen.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func
};

WelcomeScreen.defaultProps = {
  gameTime: 8,
  errorCount: 8,
};

export {WelcomeScreen};
