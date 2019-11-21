import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    const {question} = this.props;
    const {answers} = question;

    this.state = {
      userAnswer: new Array(answers.length).fill(false),
    };

    this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
  }

  _handleCheckboxChange(evt) {
    const isChecked = evt.target.checked;
    const i = evt.target.id.split(`-`)[1];

    this.setState((state) => {
      state.userAnswer[i] = isChecked;
    });
  }

  render() {
    const {question, step, onAnswer, renderPlayer} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(this.state.userAnswer);
        }}>
          {answers.map((it, i) => {
            return (
              <div key={`${step}-answer-${i}`} className="track">
                {renderPlayer(it, i)}
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                    onChange={this._handleCheckboxChange}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `classic`, `pop`, `folk`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `classic`, `pop`, `folk`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  step: PropTypes.number,
  renderPlayer: PropTypes.func.isRequired,
};

export {GenreQuestionScreen};
