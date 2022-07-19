import './App.css';
import PrivateRoute from './Components/PrivateRoute';
import Description from './Components/Description';
import ListUsers from './Components/ListUsers';
import {Routes,Route} from 'react-router-dom';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import {useState} from 'react'


function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
    {/* <ListUsers/> */}
    <NavUser auth={auth} setAuth={setAuth}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
      <Route path= '/Users/:id' element={<PrivateRoute auth={auth}><Description/></PrivateRoute>}/>
    </Routes>
    </div>
  );
}

export default App;
