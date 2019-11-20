import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createTimer} from '../../utils/createTimer.js';

class Timer extends PureComponent {
  constructor(props) {
    super(props);
  }

  /* _tickTimer() {
    const {gameTime, onTimerTick, onTimeExpired} = this.props;
    if (gameTime === 0) {
      clearInterval(this._gameTimer);
      return onTimeExpired();
    }
    return onTimerTick();
  }
  */

  _formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60) % 60;
    let seconds = Math.floor(timeInSeconds - minutes * 60);

    const time = {
      "minutes": minutes,
      "seconds": seconds
    };

    return time;
  }

  _onTimeExpired() {
    clearInterval(this._gameTimer);
    this.props.onTimeExpired();
  }

  componentDidMount() {
    /* this._gameTimer = setInterval(this._tickTimer.bind(this), 1000);*/

    const {gameTime, storeRemainingTime} = this.props;

    const timer = createTimer(gameTime, this._onTimeExpired.bind(this));

    this._gameTimer = setInterval(() => {
      storeRemainingTime(timer.tick());
    }, 1000);
  }

  componentWillUnmount() {
    this._onTimeExpired();
  }

  render() {
    const {gameTime} = this.props;
    const time = this._formatTime(gameTime);

    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{time.minutes >= 10 ? time.minutes : `0${time.minutes}`}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{time.seconds >= 10 ? time.seconds : `0${time.seconds}`}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  gameTime: PropTypes.number.isRequired,
  storeRemainingTime: PropTypes.func.isRequired,
  onTimeExpired: PropTypes.func.isRequired,
};

export {Timer};
