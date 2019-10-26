import * as React from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

const settings = {
  gameTime: 10,
  errorCount: 2,
  onClickStartButton: (() => {})
};

const App = () => {
  return <WelcomeScreen
    gameTime={settings.gameTime}
    errorCount={settings.errorCount}
    onClickStartButton={settings.onClickStartButton}
  />;
};

export {App};

