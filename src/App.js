import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={'/signup'} element={<SignUp/>}></Route>
                    <Route path={'/login'} element={<Login/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
