import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionScreen = (props) => {

  const handleFormChange = (evt) => {
    const {question, onAnswer} = props;
    const {answers} = question;

    const i = evt.target.id.split(`-`)[1];
    const userAnswer = answers[i];

    onAnswer(userAnswer);
  };

  const {question, renderPlayer} = props;
  const {answers, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song, 0)}
        </div>
      </div>

      <form className="game__artist" onChange={handleFormChange}>
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
};

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
  renderPlayer: PropTypes.func.isRequired,
};

export {ArtistQuestionScreen};
