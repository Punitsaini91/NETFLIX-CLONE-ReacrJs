
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homescreen } from './pages/Homescreen';
import { Login } from './Components/Login/Login';
import { useEffect } from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from './Services/firebase';
import { Provider, useDispatch ,useSelector } from 'react-redux';
import { login, logout, selectuser } from './Features/UserSlice';
import { ProfileScreen } from './Components/Profile/profile';
import { store } from './Store/Store';

function App() {
  const user  = useSelector((state)=>state.user.user);
  const dispatch = useDispatch();

  //  user is logging already
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // const uid = user.uid;
          console.log("uid", user.uid,user.email)
          dispatch(login({
            uid:user.uid,
            email:user.email,
              
          }))
        } else {
          dispatch(logout());
          console.log("user is logged out")
        }
      });
      return unsubscribe;
     
}, [dispatch])
  return (
<div className='app' >
      {!user ? (<Login/>) : (      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homescreen/>}/>
        <Route path="/profile" element={<ProfileScreen/>} />
      </Routes>
    </BrowserRouter>)}
    

    </div>

   );
}

export default App;
