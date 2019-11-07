import React from 'react';
import {AudioPlayer} from './audioplayer.jsx';
import renderer from 'react-test-renderer';

it(`App компонент рендерится корректно`, () => {
  const mockPlayerProps = {
    isPlaying: false,
    onPlayButtonClick: jest.fn(),
    src: ``
  };

  const createNodeMock = () => {
    return {
      oncanplaythrough: null,
      onplay: null,
      onpause: null,
      ontimeupdate: null,
      src: ``
    };
  };

  const audioPlayerComponent = renderer.create(<AudioPlayer {...mockPlayerProps} />, {createNodeMock}).toJSON();
  expect(audioPlayerComponent).toMatchSnapshot();
});
