import React,{useState} from 'react'
import './LoginScreen.css';
import SiginScreen from './SiginScreen';
function LoginScreen() {
        const[signin,setSignin]=useState(false);
        const getStarted=(e)=>{
            setSignin(true);
            e.preventDefault();
        }
    return (
        <div className="loginScreen">
            <div className="loginScreen__header">
                <img
                    className="loginScreen__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                    alt="logo"
                />

                <button className="loginScreen__btn" onClick={() => { setSignin(true) }}>sign in</button>

                <div className="loginScreen__gradient"></div>
            </div>

            <div className="loginScreen__body">
                {
                    signin ? (
                        <SiginScreen />
                    ) : (
                        <>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className="loginScreen__input">
                                <form>
                                    <input type="text" placeholder="Email address" />
                                    <button className="loginScreen__button" onClick={getStarted}>get started &gt;</button>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default LoginScreen
