import './App.css';
import Application from './Application';
import UserProvider from './provider/UserProvider';
import './scss/main.scss';
function App() {
  return (
    <UserProvider>
      <Application></Application>
    </UserProvider>
  );
}

export default App;
