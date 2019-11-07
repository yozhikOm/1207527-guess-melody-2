import React from 'react';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

it(`ArtistQuestionScreen компонент рендерится корректно`, () => {
  const mockButtonClick = jest.fn();
  /* const mockQuestion = {
    answers: [
      {
        picture: `mock picture`,
        artist: `mock artist`
      }
    ],
    song: {
      artist: `mock artist`,
      src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Checkie_Brown/hey/Checkie_Brown_-_08_-_Hippie_Bulle_-Stoned_Funghi_CB_28.mp3`,
    },
    type: `artist`,
  };*/

  const artistQuestionScreenComponent = renderer.create(<ArtistQuestionScreen question={questions[2]} onAnswer={mockButtonClick}/>).toJSON();
  expect(artistQuestionScreenComponent).toMatchSnapshot();
});
