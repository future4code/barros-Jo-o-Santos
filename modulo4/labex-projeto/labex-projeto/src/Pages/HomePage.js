import React from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../Routers/Coordinator";

function HomePage () {
    const navigate = useNavigate()
    return (
        <>
        <h1> Labex  </h1>
        <button onClick={()=> R.goToAdminHomePage (navigate)}> Ver Viagens</button>
        <button onClick={()=> R.goToLoginPage (navigate)}> Área de Admin  </button>
     
        </>
        
    );
}

export default HomePage;