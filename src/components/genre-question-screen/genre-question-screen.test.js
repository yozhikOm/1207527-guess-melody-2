import React from 'react';
import {GenreQuestionScreen} from './genre-question-screen.jsx';
import renderer from 'react-test-renderer';

it(`GenreQuestionScreen компонент рендерится корректно`, () => {
  const mockQuestion = {
    answers: [
      {
        src: `mock answer source`,
        genre: `mock answer genre`,
      },
    ],
    genre: `mock genre`
  };

  const genreQuestionScreenComponent = renderer.create(<GenreQuestionScreen question={mockQuestion}/>).toJSON();
  expect(genreQuestionScreenComponent).toMatchSnapshot();
});
