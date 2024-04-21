import './App.css';
import {MainPage, RegisterPage, LoginPage} from './pages';
import './firebase';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useUser} from './store/user';

function App() {
    const user = useUser((state) => state.user);

    console.log(user.email);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
