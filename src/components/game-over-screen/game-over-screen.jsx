import React from 'react';
import PropTypes from "prop-types";

const GameOverScreen = (props) => {
  const {
    onStartButtonClick,
  } = props;

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <button className="welcome__button" onClick={onStartButtonClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Время вышло! Игра окончена</h2>
    <p className="welcome__text">Попробуйте еще раз!</p>
  </section>;
};

GameOverScreen.propTypes = {
  onStartButtonClick: PropTypes.func
};


export {GameOverScreen};
