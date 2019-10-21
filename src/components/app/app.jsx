import * as React from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen 
    gameTime={gameTime}
    errorCount={errorCount}
  />;
};

export {App};

