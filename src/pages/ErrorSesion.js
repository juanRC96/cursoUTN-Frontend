import { Button } from "react-bootstrap";

export default function ErrorSesion(props){

    const {error} = props;

    return(
        <div className="holder">
        <div className="contenedor">
            {
                error === "sesionnoiniciada" &&
                <>
                <h3>Sesion no iniciada</h3>
                <Button>Iniciar sesión</Button>
                </>
            }
                        {
                error === "sesioniniciada" &&
                <h3>Ya hay una sesión iniciada</h3>
            }
        </div>
        </div>
    )
}