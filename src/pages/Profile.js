import React from 'react';
// import Header from "../components/Header";
import Log from '../components/Log';

const Profile = () => {
    return (
        
        <div className="profil-page">
            <div className="log-container">
                <Log signIn={false} signUp={true}/>
            </div>
            <div className='img-container'>
                <img src="./img/img_connexion.webp" alt="img-log"/>
            </div>
            
        </div>
        
    );
};

export default Profile;