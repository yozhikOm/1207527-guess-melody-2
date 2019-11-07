import React from 'react';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

it(`ArtistQuestionScreen компонент рендерится корректно`, () => {
  const mockButtonClick = jest.fn();
  const mockQuestion = questions.find((q) => q.type === `artist`);

  const createNodeMock = () => {
    return {
      oncanplaythrough: null,
      onplay: null,
      onpause: null,
      ontimeupdate: null,
      src: ``
    };
  };

  const artistQuestionScreenComponent = renderer.create(
      <ArtistQuestionScreen
        question={mockQuestion}
        onAnswer={mockButtonClick}/>,
      {createNodeMock})
      .toJSON();
  expect(artistQuestionScreenComponent).toMatchSnapshot();
});
