import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withUserAnswer from './with-user-answer.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`Paused by default`, () => {
  const wrapped = mount(<MockComponentWrapped />);
  const mockUserAnswer = [false, false, false, false];

  expect(wrapped.state().userAnswer).toBe(mockUserAnswer);
});

