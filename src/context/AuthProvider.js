import React,{useState} from "react"
import AuthContext from "./AuthContext"
import {useNavigate} from "react-router-dom";


function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(sessionStorage.getItem("login")|| false)
    const [username,setUsername] = useState(sessionStorage.getItem("username")||{})
    const navigate = useNavigate()

    const loginUser = (usuario) => {
        setUserLogin(true)
        setUsername(usuario)
        sessionStorage.setItem("login",true)
        sessionStorage.setItem("username",usuario)
        setTimeout(()=>{
            navigate("/")
        },1000)
    }
    const logoutUser = () => {
        setUserLogin(false)
        sessionStorage.removeItem("login")
        setTimeout(()=>{
            navigate("/")
        },1000)
    }

    return(
        <AuthContext.Provider value={{
            userLogin,
            loginUser,
            logoutUser,
            username
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;