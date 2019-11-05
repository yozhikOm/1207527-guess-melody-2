import React from 'react';
import {GenreQuestionScreen} from './genre-question-screen.jsx';
import renderer from 'react-test-renderer';

it(`GenreQuestionScreen компонент рендерится корректно`, () => {
  const mockButtonClick = jest.fn();
  const mockQuestion = {
    answers: [
      {
        src: `mock src`,
        genre: `rock`
      }
    ],
    genre: `rock`,
    type: `genre`,
  };

  const genreQuestionScreenComponent = renderer.create(<GenreQuestionScreen question={mockQuestion} onAnswer={mockButtonClick}/>).toJSON();
  expect(genreQuestionScreenComponent).toMatchSnapshot();
});
