import React from "react";
import style from "./Home.module.css"

function Home() {

    return(
        <div className={style.home_container}>
            <h1>Bem vindo a <span>Scripted Chaos Corp</span> !</h1>
            <img src="./rossreact.png"/>
            <p>Onde codar nunca é de mais!</p>
        </div>
    );
};

export default Home;