import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

it(`App компонент рендерится корректно`, () => {
  const createNodeMock = () => {
    return {
      oncanplaythrough: null,
      onplay: null,
      onpause: null,
      ontimeupdate: null,
      src: ``
    };
  };

  const appComponent = renderer.create(
      <App
        questions={questions}
        gameTime={10}
        errorCount={2}
        mistakes={0}
        step={1}
        onWelcomeScreenClick={jest.fn()}
        onUserAnswer={jest.fn()}
        storeRemainingTime={jest.fn()}
        onTimeExpired={jest.fn()}
      />,
      {createNodeMock}
  ).toJSON();
  expect(appComponent).toMatchSnapshot();
});
