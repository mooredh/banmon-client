import './App.css';
import LogRocket from 'logrocket';
import {StoreProvider} from './store';
import MainScreen from './screens/MainScreen';

LogRocket.init('yfysec/banmon');

function App() {
  return (
    <StoreProvider>
      <MainScreen />
    </StoreProvider>
  );
}

export default App;
