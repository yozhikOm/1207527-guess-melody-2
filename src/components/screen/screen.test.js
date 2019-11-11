import React from 'react';
import {Screen} from './screen.jsx';
import renderer from 'react-test-renderer';
import {questions} from '../../mocks/questions.js';

it(`Screen компонент рендерится корректно`, () => {
  const mockSettings = {
    gameTime: 5,
    errorCount: 3
  };
  const mockQuestion1 = questions.find((q) => q.type === `genre`);
  const mockQuestion2 = questions.find((q) => q.type === `artist`);

  const mockButtonClick = jest.fn();

  const createNodeMock = () => {
    return {
      oncanplaythrough: null,
      onplay: null,
      onpause: null,
      ontimeupdate: null,
      src: ``
    };
  };

  const screenComponent1 = renderer.create(
      <Screen
        gameSettings={mockSettings}
        question={mockQuestion1}
        onUserAnswer={mockButtonClick}/>,
      {createNodeMock}
  ).toJSON();
  expect(screenComponent1).toMatchSnapshot();

  const screenComponent2 = renderer.create(
      <Screen
        gameSettings={mockSettings}
        question={mockQuestion2}
        onUserAnswer={mockButtonClick}/>,
      {createNodeMock}
  ).toJSON();
  expect(screenComponent2).toMatchSnapshot();

  const screenComponent3 = renderer.create(
      <Screen
        gameSettings={mockSettings}
        question={undefined}
        onUserAnswer={mockButtonClick}/>,
      {createNodeMock}
  ).toJSON();
  expect(screenComponent3).toMatchSnapshot();
});
