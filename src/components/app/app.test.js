import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

it(`App компонент рендерится корректно`, () => {
  const appComponent = renderer.create(
      <App
        gameTime={10}
        errorCount={2}
        onWelcomeScreenClick={jest.fn()}
        onUserAnswer={jest.fn()}
        mistakes={0}
        questions={questions}
      />).toJSON();
  expect(appComponent).toMatchSnapshot();
});
