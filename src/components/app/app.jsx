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
      onClickStartButton,
      questions,
    } = this.props;

    return <WelcomeScreen
      gameTime={gameTime}
      errorCount={errorCount}
      onClickStartButton={onClickStartButton}
    />;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onClickStartButton: PropTypes.func,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        genre: PropTypes.number.isRequired,
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string.isRequired,
              genre: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
      }).isRequired
  ).isRequired,
};

export {App};

