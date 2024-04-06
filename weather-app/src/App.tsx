import './App.css';
import { MainPage, RegisterPage, LoginPage } from './pages';
import './firebase'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import user from './store/user';

function App() {
    
    console.log(user.user.email)

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
