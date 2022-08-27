import React from "react";
import { Button, Col } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";
import "./../styles/components/pages/NoticiasPage.css";
import axios from "axios";

const Noticia= (props) =>{

    const{id,title,subtitle,imagen,body,setRefresh} = props;
    

    const handleDelete = async() => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/noticias/eliminar/`+id).then(()=>setRefresh((old) => old + 1)) 
    }

    return(
        <AuthContext.Consumer>
            {
                context=>
                    <Col style={{marginTop:"1rem",marginBottom:"1rem"}}>
                        <div className="noticia">
                            <h2>{title}</h2>
                            <h5>{subtitle}</h5>
                            <img src={imagen} alt="" style={{width:"30rem",height:"30rem",objectFit:"cover"}}/>
                            <p>{body}</p>
                            {
                                context.userLogin &&
                                <>
                                <Button as={Link} to={"/noticias/modificar/"+id}>Modificar</Button>
                                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                                </>
                            }
                        </div>
                    </Col>
            }
        </AuthContext.Consumer>
    );
}

export default Noticia;