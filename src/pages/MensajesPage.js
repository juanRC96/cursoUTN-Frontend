import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

export default function MensajesPage(){

    const [mensajes,setMensajes] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(()=>{
        const request = async() =>{
            await axios.get("http://localhost:3000/api/mensajes").then((response)=>setMensajes(response.data))
        }
        request()
    },[refresh])

    const handleDelete = async(id) =>{
        axios.post('http://localhost:3000/api/mensajes/eliminar/'+id).then(()=>setRefresh((old) => old + 1)) 
    }

    return(
        <div>
        {mensajes.map((mensaje)=>
        <div style={{backgroundColor:"white",margin:"2rem",padding:"1rem",borderRadius:"10px"}} key={mensaje.id}>
            <h3>De: {mensaje.nombre}</h3>
            <h5>e-mail: {mensaje.email}</h5>
            <h5>Telefono: {mensaje.telefono}</h5>
            <p>Mensaje: {mensaje.mensaje}</p>
            <Button variant="danger" onClick={()=>handleDelete(mensaje.id)}>Eliminar mensaje</Button>
        </div>
        
        )}
        </div>
    )
}