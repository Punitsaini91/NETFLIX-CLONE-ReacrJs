import { useRef } from "react";
import "./SignupScreen.css"
import { auth } from "../../Services/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
export const SignupScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                // ..
            });
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }


    return (<div className="signUpScreen">
        <form>
            <h1>Sign IN</h1>
            <input ref={emailRef} type="email" placeholder="Email Address"></input>
            <input ref={passwordRef} type="password" placeholder="Password"></input>
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4><span className="signup_grey">New to Netflix? </span>
                <span className="signup_link" onClick={register}>Sign up Now</span></h4>
        </form>
    </div>)
}