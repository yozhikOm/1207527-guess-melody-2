import React from 'react';
import PropTypes from "prop-types";
import {Timer} from '../timer/timer.jsx';

const Header = (props) => {
  const {gameTime, mistakes, storeRemainingTime, onTimeExpired} = props;

  return (
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370"
          style={{
            filter: `url(#blur)`,
            transform: `rotate(-90deg) scaleY(-1)`,
            transformOrigin: `center`
          }}
        />
      </svg>

      <Timer gameTime={gameTime} storeRemainingTime={storeRemainingTime} onTimeExpired={onTimeExpired} />

      <div className="game__mistakes">
        {new Array(mistakes).fill(``).map((it, i) => {
          return (
            <div key={`mistake-${i}`} className="wrong" />
          );
        })}
      </div>
    </header>
  );
};

Header.propTypes = {
  gameTime: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  storeRemainingTime: PropTypes.func.isRequired,
  onTimeExpired: PropTypes.func.isRequired,
};

export {Header};
