import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './components/Footer/Footer';
import MyInventory from './components/MyInventory/MyInventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Blog from './components/Blog/Blog';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <MyInventory />
          </RequireAuth>
        } />
        <Route path='manageInventory' element={
          <RequireAuth>
            <ManageInventory/>
          </RequireAuth>
        }/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
