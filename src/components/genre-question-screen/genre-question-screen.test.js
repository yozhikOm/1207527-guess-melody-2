import React from 'react';
import {GenreQuestionScreen} from './genre-question-screen.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

// jest.mock(`../audioplayer/audioplayer.jsx`);

it(`GenreQuestionScreen компонент рендерится корректно`, () => {
  const mockButtonClick = jest.fn();
  const mockQuestion = questions.find((q) => q.type === `genre`);
  const mockStep = 0;
  const mockUserAnswer = [false, false, true, false];
  const createNodeMock = () => {
    return {
      oncanplaythrough: null,
      onplay: null,
      onpause: null,
      ontimeupdate: null,
      src: ``
    };
  };

  const genreQuestionScreenComponent = renderer.create(
      <GenreQuestionScreen
        question={mockQuestion}
        onAnswer={mockButtonClick}
        step={mockStep}
        renderPlayer={jest.fn()}
        userAnswer={mockUserAnswer}
        setState={jest.fn()}
      />,
      {createNodeMock}
  ).toJSON();
  expect(genreQuestionScreenComponent).toMatchSnapshot();
});
