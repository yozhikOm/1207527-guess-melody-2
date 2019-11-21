import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';
import {questions} from '../../mocks/questions.js';

Enzyme.configure({adapter: new Adapter()});

describe(`Enzyme тест change'а формы`, () => {
  it(`Кнопка нажимается`, () => {
    const mockButtonClick = jest.fn();
    const mockQuestion = questions.find((q) => q.type === `artist`);
    const mockEvent = {
      target: {
        id: `answer-1`
      }
    };
    const mockRenderPlayer = jest.fn();

    const wrapper = shallow(<ArtistQuestionScreen
      question={mockQuestion}
      onAnswer={mockButtonClick}
      renderPlayer={mockRenderPlayer}
    />);
    wrapper.find(`form`).simulate(`change`, mockEvent);
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
