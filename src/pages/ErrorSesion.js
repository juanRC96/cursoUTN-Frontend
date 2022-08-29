import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ErrorSesion(props){

    const {error} = props;

    return(
        <div className="holder">
        <div className="contenedor" style={{textAlign:"center"}}>
            {
                error === "sesionnoiniciada" &&
                <>
                <h3>Sesion no iniciada</h3>
                <Button as={Link} to="/login">Iniciar sesión</Button>
                </>
            }
                        {
                error === "sesioniniciada" &&
                <>
                <h3>Ya hay una sesión iniciada</h3>
                <Button as={Link} to="/">Volver al home</Button>
                </>
            }
        </div>
        </div>
    )
}