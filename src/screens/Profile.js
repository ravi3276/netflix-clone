import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import './Profile.css';

function Profile() {
    const user=useSelector(selectUser)
    return (
        <div className="profile">
            <Nav />
            <div className="profile__body">
                <h1>select a plan</h1>
                <div className="profile__info">
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                        alt=""
                    />
                    <div className="profile__details">
                        <h2 className="profile__email">{user.email}</h2>
                        <div className="profile__plans">
                            <h3>plans</h3>
                            <div className="plan__details">

                            </div>
                        </div>

                        <button type="submit" className="signout" onClick={() =>{auth.signOut()}}>sign out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
