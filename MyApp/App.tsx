import * as React from 'react';
import MainScreen from './src/screens/MainScreen';
import SlashScreen from './src/screens/SlashScreen';

function App() {
  const [time, setTime] = React.useState(false);
  return (
    <>
      {setTimeout(function () {
        setTime(true);
      }, 3000)}
      {time ? <MainScreen /> : <SlashScreen />}
    </>
  );
}

export default App;
