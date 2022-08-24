import React, { useEffect, useState } from "react";
import Noticia from "../components/Noticia";
import axios from 'axios';
import "./../styles/components/pages/NoticiasPage.css"
import { Button, Row, Spinner } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

const NoticiasPage = (props) =>{

    const [loading,setLoading] = useState(false);
    const [noticias,setNoticias] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(()=>{
        const cargarNoticias = async() =>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/noticias');
            setNoticias(response.data);
            setLoading(false);
        };
        cargarNoticias();
    },[refresh]);


    return(
        <AuthContext.Consumer>
            {
                context =>
                    <section className="holder">
                    <div className="noticias">
                        {
                            context.userLogin &&
                            <Button as={Link} to="/alta">Añadir noticia</Button>
                        }
                        {
                            loading &&
                            <Spinner animation="border" variant="primary" style={{width:"5rem",height:"5rem",position:"relative",right:"2.5rem"}}/>
                        }
                        {
                            !loading &&
                            <Row style={{marginTop:"1rem",marginBottom:"1rem"}}>
                                {noticias.map(noticia => <Noticia key={noticia.id} id={noticia.id} title={noticia.titulo} subtitle={noticia.subtitulo} imagen={noticia.imagen} body={noticia.cuerpo} setRefresh={setRefresh}/>)}
                            </Row>
                        }
                    </div>
                    </section>
            }
        </AuthContext.Consumer>
    );
}

export default NoticiasPage;