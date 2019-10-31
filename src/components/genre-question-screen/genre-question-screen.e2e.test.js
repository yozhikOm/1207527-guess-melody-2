import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreen} from './genre-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Enzyme тест клика кпонки`, () => {
  it(`Кнопка нажимается`, () => {
    const mockQuestion = {
      answers: [
        {
          src: `mock answer source`,
          genre: `mock answer genre`,
        },
      ],
      genre: `mock genre`
    };
    const mockButtonClick = jest.fn();
    const wrapper = mount(<GenreQuestionScreen question={mockQuestion} onAnswer={mockButtonClick}/>);
    wrapper.find(`button`).at(0).simulate(`click`);
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
