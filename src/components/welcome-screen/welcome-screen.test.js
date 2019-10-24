import React from 'react';
import {WelcomeScreen} from './welcome-screen.jsx';
import renderer from 'react-test-renderer';

it(`WelcomeScreen компонент рендерится корректно`, () => {
  const welcomeScreenComponent = renderer.create(<WelcomeScreen />).toJSON();
  expect(welcomeScreenComponent).toMatchSnapshot();
});
