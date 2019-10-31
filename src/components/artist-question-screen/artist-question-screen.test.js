import React from 'react';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';
import renderer from 'react-test-renderer';

it(`ArtistQuestionScreen компонент рендерится корректно`, () => {
  const mockQuestion = {
    answers: [
      {
        picture: `mock answer picture`,
        artist: `mock answer artist`,
      },
    ],
  };

  const artistQuestionScreenComponent = renderer.create(<ArtistQuestionScreen question={mockQuestion}/>).toJSON();
  expect(artistQuestionScreenComponent).toMatchSnapshot();
});
