import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {AudioPlayer} from '../audioplayer/audioplayer.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleFormChange = this._handleFormChange.bind(this);
  }

  _handleFormChange(evt) {
    const {question, onAnswer} = this.props;
    const {answers} = question;

    const i = evt.target.id.split(`-`)[1];
    const userAnswer = answers[i];

    onAnswer(userAnswer);
  }

  render() {
    const {question} = this.props;
    const {answers, song} = question;
    const {isPlaying} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              isPlaying={isPlaying}
              onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
              src={song.src}
            />
          </div>
        </div>

        <form className="game__artist" onChange={this._handleFormChange}>
          {answers.map((it, i) => {
            return (
              <div key={`answer-${i}`} className="artist">
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                />
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={it.picture} alt={it.artist} />
                  {it.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    );
  }

}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export {ArtistQuestionScreen};
