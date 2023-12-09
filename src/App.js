
// import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>

          </Route>

        </Routes>
      </BrowserRouter>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}



    </div>
  );
}

export default App;
