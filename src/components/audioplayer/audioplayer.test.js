import React from 'react';
import {AudioPlayer} from './audioplayer.jsx';
import renderer from 'react-test-renderer';

it(`App компонент рендерится корректно`, () => {
  const mockFunc = jest.fn();

  const audioPlayerComponent = renderer.create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={mockFunc}
    src="http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3"
  />,
  {
    createNodeMock: () => {
      return {
        oncanplaythrough: null,
        onplay: null,
        onpause: null,
        ontimeupdate: null,
        src: ``
      };
    }
  }
  ).toJSON();
  expect(audioPlayerComponent).toMatchSnapshot();
});
