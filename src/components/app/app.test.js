import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

it(`App компонент рендерится корректно`, () => {
  const mockSettings = {
    gameTime: 10,
    errorCount: 2,
    onClickStartButton: (() => {})
  };
  const appComponent = renderer.create(<App
    errorCount={mockSettings.errorCount}
    gameTime={mockSettings.gameTime}
    questions={questions}
  />).toJSON();
  expect(appComponent).toMatchSnapshot();
});
