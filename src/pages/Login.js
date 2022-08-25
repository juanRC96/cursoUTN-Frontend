import axios from "axios";
import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

export default function Login(){

    const [form,setForm] = useState({username:"",password:""})
    const context = useContext(AuthContext)
    const [variante,setVariante] = useState("");
    const [texto,setTexto] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
          let res = await axios.post('http://localhost:3000/api/usuarios',form)

          if(res.data.usuario!==undefined){
            context.loginUser(res.data.usuario)
            setVariante("success")
            setTexto("Iniciando sesion")
          }else{
            setVariante("danger")
            setTexto("Hubo un error al iniciar sesion")
          }
        } catch (error) {
          console.log(error);
        }
      };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
        console.log(form)
      };

    return(
        <div className="holder">
        <div className="contenedor">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="user" placeholder="Enter username" name="username" onChange={handleChange}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>

        <Alert variant={variante}>{texto}</Alert>

      </Form>
      </div>
      </div>
    )
}