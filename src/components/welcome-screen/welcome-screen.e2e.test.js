import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Enzyme тест клика кпонки`, () => {
  it(`Кнопка нажимается`, () => {
    const mockStartClick = jest.fn();
    const wrapper = shallow(<WelcomeScreen onStartButtonClick={mockStartClick}/>);
    wrapper.find(`button`).at(0).simulate(`click`);
    expect(mockStartClick).toHaveBeenCalled();
  });
});
