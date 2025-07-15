import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice";
import { Link } from "react-router-dom";



const Header = () => {


    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const [show, setShow] = useState(false);
    

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
          })
            .catch((error) => {
            
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}))
              navigate("/browse")
            } 
            else {
              dispatch(removeUser())
              navigate("/");
            
            }
        });

        return () => unsubscribe();
    }, [])


    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))
      
    }

    const handleShow = () => {
      setShow(!show)
    }
 
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <h1 className="text-3xl font-bold text-purple-500 w-44 mx-auto md:mx-0">
              Movie-GPT
            </h1>

             {user && (<div className="flex p-2 justify-between">

              {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white " onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>) )}
                
              </select>)}

              <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "HomePage" : "GPT Search"}
                </button>

                <Link to="/about">
                <button className="py-2 px-4 my-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
                  About
                </button>
              </Link>

                <div className="relative">
                <img
                className="hidden md:block w-12 h-12 cursor-pointer"
                alt="user" src={USER_ICON}
                onClick={handleShow}/>

                {show && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white p-4 rounded shadow-lg text-center">
                 <h4 className="font-bold text-gray-800">Welcome! {user.displayName}</h4>
                <button onClick={handleSignOut} className="mt-2 text-red-500 font-bold hover:underline">Sign Out</button>
                </div>
              )}
                </div>

             </div>)}
        </div>
    )
}


export default Header;

