import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AudioPlayer} from './audioplayer.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Enzyme тест аудио плеера`, () => {
  it(`Кнопка нажимается`, () => {
    const trackButtonClickHandler = jest.fn();

    HTMLMediaElement.prototype.pause = () => {};

    const mockPlayerProps = {
      isPlaying: false,
      onPlayButtonClick: trackButtonClickHandler,
      src: ``
    };

    const audioPlayer = mount(<AudioPlayer {...mockPlayerProps}/>);

    const trackButton = audioPlayer.find(`.track__button`);

    expect(audioPlayer.state().isPlaying).toBe(false);
    expect(trackButtonClickHandler).toHaveBeenCalledTimes(0);

    trackButton.prop(`onClick`)();
    // trackButton.simulate(`click`);

    expect(trackButtonClickHandler).toHaveBeenCalledTimes(1);
    expect(audioPlayer.state().isPlaying).toBe(true);

    trackButton.prop(`onClick`)();
    expect(trackButtonClickHandler).toHaveBeenCalledTimes(2);
    expect(audioPlayer.state().isPlaying).toBe(false);
  });
});
