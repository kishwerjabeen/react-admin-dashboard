
// import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';


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
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />


            {/* user Routes */}
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userid' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>



              {/* user Routes */}
              <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>



          </Route>

        </Routes>
      </BrowserRouter>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}



    </div>
  );
}

export default App;
