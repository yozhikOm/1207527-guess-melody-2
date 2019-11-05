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
      ],
      song: {
        artist: `mock artist`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Checkie_Brown/hey/Checkie_Brown_-_08_-_Hippie_Bulle_-Stoned_Funghi_CB_28.mp3`,
      },
      type: `artist`,
    };

    const mockButtonClick = jest.fn();

    const wrapper = shallow(<ArtistQuestionScreen question={mockQuestion} onAnswer={mockButtonClick}/>);
    wrapper.find(`form`).simulate(`change`);
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
