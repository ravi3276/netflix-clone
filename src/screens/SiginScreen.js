import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SiginScreen.css';
function SiginScreen() {
    const emailref = useRef(null)
    const passref = useRef(null)

    const register=(e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passref.current.value
        ).then((authUser) =>{console.log(authUser)})
        .catch((err) =>{alert(err)})
    }

    const signIn=(e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passref.current.value
        ).then((authUser) =>{console.log(authUser,"sign")})
        .catch((err) =>{alert(err)})
    }

    return (
        <div className="siginScreen">
            <form>
            <h1>sign in</h1>
            <input ref={emailref} type="text" placeholder="Email or phone number"/>
            <input ref={passref} type="text" placeholder="Password"/>
            <button className="siginScreen__btn" type="submit" onClick={signIn}>sign in</button>

            <h3>
                New to Netflix?
                <span className="siginScreen__signup" onClick={register}>Sign up now.</span>
            </h3>
            </form>
        </div>
    )
}

export default SiginScreen
