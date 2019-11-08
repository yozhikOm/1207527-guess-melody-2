import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Header} from '../header/header.jsx';
import {Screen} from '../screen/screen.jsx';

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

  _incrementQIndex() {
    const {questionIndex} = this.state;

    this.setState({
      questionIndex: questionIndex + 1 >= this.props.questions.length
        ? -1
        : questionIndex + 1,
    });
  }

  render() {
    const {
      gameTime,
      errorCount,
    } = this.props;

    const {questions} = this.props;
    const {questionIndex} = this.state;

    const question = questions[questionIndex];
    const gameSettings = ({gameTime}, {errorCount});

    return <section className={`game ${Type.ARTIST}`}>
      {this.state.questionIndex !== -1 && <Header/>}

      <Screen gameSettings={gameSettings} question={question} onUserAnswer={this._incrementQIndex.bind(this)}/>

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
