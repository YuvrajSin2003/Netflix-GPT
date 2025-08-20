import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from './utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { addUser , removeUser } from './utils/userSlice'
import { LOGO } from './utils/constant'


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  
  const handelSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

   useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => { //if user is log in navigate to browser
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser")
      } else { //else navigate to the home page
        dispatch(removeUser);
         navigate("/")
      }
    });
        return () => unsubscribe();
  }, []);

  return (
    <div className='w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO}
        alt='logo'/>
      {user && (<div className='flex p-2'>
        <img className='w-20 h-20 rounded-md '
          alt="usericon"
          src={user?.photoURL}/>
        <button onClick={handelSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header