import React, {PureComponent} from 'react';
import {AudioPlayer} from '../../components/audioplayer/audioplayer.jsx';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };

      // this._setActivePlayer = this._setActivePlayer.bind(this);
      this.playButtonClickHandlers = {};
    }

    /* _setActivePlayer(i){
      const {activePlayer} = this.state;

      this.setState({
        activePlayer: activePlayer === i ? -1 : i
      });

    }*/

    _onPlayButtonClick(id) {
      if (!this.playButtonClickHandlers.hasOwnProperty(id)) {
        // Если обработчика нет, то создаем его и кешируем. Если он уже создан, то берем из кеша.
        this.playButtonClickHandlers[id] = () => {
          const {activePlayer} = this.state;
          this.setState({
            activePlayer: activePlayer === id ? -1 : id
          });
        };
      }

      return this.playButtonClickHandlers[id];
    }

    render() {
      const {activePlayer} = this.state;

      return <Component {...this.props}
        renderPlayer={(it, i) => {
          return <AudioPlayer
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick={this._onPlayButtonClick(i)}
          />;
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
