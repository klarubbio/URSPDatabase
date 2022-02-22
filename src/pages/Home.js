import React from 'react';
import {navigate, useNavigate} from 'react-router-dom';



const Home = () => {


    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/database';
        navigate(path);
    }

    return (<section>
        <h1>Home</h1>
        <h2>Welcome to the URSP Networking Database!</h2>
        <container>
            <button color ="primary" classNmae="px-4"
            onClick={routeChange}
            >Go to database!

            </button>
        </container>
    </section>
    );
};

export default Home;