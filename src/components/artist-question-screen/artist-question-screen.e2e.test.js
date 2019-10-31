import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Enzyme тест change'а формы`, () => {
  it(`Кнопка нажимается`, () => {
    const mockQuestion = {
      answers: [
        {
          picture: `mock picture`,
          artist: `mock artist`
        }
      ]
    };

    const mockButtonClick = jest.fn();

    const wrapper = shallow(<ArtistQuestionScreen question={mockQuestion} onAnswer={mockButtonClick}/>);
    wrapper.find(`form`).simulate(`change`);
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
