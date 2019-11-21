import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withUserAnswer from './with-user-answer.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`Тестируем WithUserAnswer`, () => {
  const wrapped = shallow(<MockComponentWrapped />);

  wrapped.instance()._setState(1, true);
  expect(wrapped.state().userAnswer).toEqual([false, true, false, false]);

  wrapped.instance()._setState(1, false);
  expect(wrapped.state().userAnswer).toEqual([false, false, false, false]);

  wrapped.instance()._setState(3, true);
  expect(wrapped.state().userAnswer).toEqual([false, false, false, true]);

  wrapped.instance()._setState(2, true);
  expect(wrapped.state().userAnswer).toEqual([false, false, true, true]);

});

