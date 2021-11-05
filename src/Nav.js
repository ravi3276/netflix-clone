import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './Nav.css';
function Nav() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const profile=()=>{
        history.push('/profile')
    };

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY>100){
                setShow(true);
            }
            else{setShow(false)}
        })
        return () => {
            window.removeEventListener('scroll',() =>{});
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__container">
            <img className="nav__logo"
            onClick={()=>{ history.push('/')}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" 
            alt="" 
            />

            <img className="nav__profile"
            onClick={profile}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="" 
            />
            </div>
        </div>
    )
}

export default Nav
