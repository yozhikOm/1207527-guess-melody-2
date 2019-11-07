import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreen} from './genre-question-screen.jsx';
import {questions} from '../../mocks/questions.js';

Enzyme.configure({adapter: new Adapter()});

describe(`Enzyme тест submit'а формы`, () => {
  it(`Кнопка нажимается`, () => {
    const mockQuestion = questions.find((q) => q.type === `genre`);

    const mockButtonClick = jest.fn();
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };

    const wrapper = shallow(<GenreQuestionScreen question={mockQuestion} onAnswer={mockButtonClick}/>);
    wrapper.find(`form`).simulate(`submit`, mockEvent);
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
