import * as React from 'react';
import MainScreen from './src/screens/MainScreen';
import SlashScreen from './src/screens/SlashScreen';

function App() {
  const [time, setTime] = React.useState(false);
  setTimeout(function () {
    setTime(true);
  }, 3000);
  return <>{time ? <MainScreen /> : <SlashScreen />}</>;
}

export default App;
