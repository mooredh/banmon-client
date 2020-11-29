import './App.css';
import LogRocket from 'logrocket';
import {StoreProvider} from './store';

LogRocket.init('yfysec/banmon');

function App() {
  return (
    <StoreProvider>

    </StoreProvider>
  );
}

export default App;
