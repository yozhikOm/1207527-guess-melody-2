import React from 'react';
import {Timer} from './timer.jsx';
import renderer from 'react-test-renderer';

it(`Timer компонент рендерится корректно`, () => {
  const timerComponent = renderer.create(
      <Timer
        gameTime={60}
        storeRemainingTime={jest.fn()}
        onTimeExpired={jest.fn()}
      />).toJSON();
  expect(timerComponent).toMatchSnapshot();
});
