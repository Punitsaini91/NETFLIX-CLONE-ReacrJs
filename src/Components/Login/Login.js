import { useState } from "react"
import "./login.css"
import { SignupScreen } from "../SignupScreen/SignupScreen";
export const Login = ()=>{

    const [signIn,setsign]= useState(false);


    return(
    <div className="login_screen">
        <div className="loginscreen_Background">
            <img className="loginScreenlogo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"  alt="NoImage"></img>

            <button className="login_button" onClick={()=>setsign(true)}>Sign IN</button>

            <div className="linear_Gradient" />
        </div>

        <div className="loginScreen_body">
            {
                signIn ? (<SignupScreen/>): (<>
                    <h1>Unlimited films, Tv programmes and more. </h1>
                    <h2>Watch anywhere. cancle at any time.</h2>
                    <h3>Ready to watch ? Enter your email to create or restart your membership</h3>
                    <div className="loginscreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"></input>
                            <button className="loginscreen_button" onClick={()=>setsign(true)} >Get Started</button>
                        </form>
                    </div>
                    </>)
            }
        </div>

    </div>)
}