import React, { useState } from "react";
import "./../styles/components/pages/ContactoPage.css"
import {Form} from "react-bootstrap";
import Alerts from "../components/Alerts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactoPage = (props) => {

  const [alert,setAlert] = useState({variant:"",text:""});
  const [form,setForm] = useState({nombre:"",email:"",telefono:"",mensaje:""});
  const navigate = useNavigate();
  const [sending,setSending] = useState(false);

  const handleSubmit= async(event) =>{
    event.preventDefault();
    try {
      let res = await axios.post('http://localhost:3000/api/mensajes/agregar',form)
      if(res.status===200){
        setAlert({variant:"primary",text:"Enviando..."})
        await axios.post('http://localhost:3000/api/contacto',form)
        setAlert({variant:"success",text:"Mensaje enviado con exito"})
        setTimeout(()=>{
          navigate("/")
      },1200)
      }
    } catch (error) {
      console.log(error);
      setAlert({variant:"danger",text:"Error"})
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    console.log(form)
  };


  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <Form action="" method="" className="formulario" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" onChange={handleChange}></input>
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange}></input>
          </p>
          <p>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" name="telefono" onChange={handleChange}></input>
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" onChange={handleChange}></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
          <Alerts variant={alert.variant} text={alert.text}/>
        </Form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>
          Tambien puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono: 43242354</li>
          <li>Email: tecnonews@mail.com</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
