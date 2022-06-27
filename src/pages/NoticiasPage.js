import React from "react";
import Noticia from "../components/Noticia";
import "./../styles/components/pages/NoticiasPage.css"

const NoticiasPage = (props) =>{
    return(
        <section className="holder">
            <div className="noticias">
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            </div>
        </section>
    );
}

export default NoticiasPage;