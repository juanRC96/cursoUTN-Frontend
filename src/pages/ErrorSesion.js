
export default function ErrorSesion(props){

    const {mensaje} = props;

    return(
        <div className="contenedor">
            <h3>{mensaje}</h3>
        </div>
    )
}