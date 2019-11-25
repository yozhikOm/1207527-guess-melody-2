import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withUserAnswer from './with-user-answer.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`Тестируем WithUserAnswer`, () => {
  const wrapped = shallow(<MockComponentWrapped />);

  wrapped.instance()._setState([false, true, false, false]);
  expect(wrapped.state().userAnswer).toEqual([false, true, false, false]);

  wrapped.instance()._setState([false, false, false, false]);
  expect(wrapped.state().userAnswer).toEqual([false, false, false, false]);

  wrapped.instance()._setState([false, false, false, true]);
  expect(wrapped.state().userAnswer).toEqual([false, false, false, true]);

  wrapped.instance()._setState([false, false, true, true]);
  expect(wrapped.state().userAnswer).toEqual([false, false, true, true]);

});

