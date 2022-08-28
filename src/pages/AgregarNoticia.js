import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AgregarNoticia(){

  const [variante,setVariante] = useState("");
  const [texto,setTexto] = useState("");
  const [form,setForm] = useState({titulo:"",subtitulo:"",cuerpo:"",img_id:""});
  const [imageSelected,setImageSelected] = useState("");
  const [uploading,setUploading] = useState(false);
  const [allowUpload, setAllowUpload] = useState(false);
  const [successUpload,setSuccessUpload] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/noticias/agregar`,form)
      if(res.status===200){
        setVariante("success")
        setTexto("Noticia agregada")
        setTimeout(()=>{
          navigate("/noticias")
      },1000)
      }
    } catch (error) {
      setVariante("danger")
      setTexto("Hubo un error")
      console.log(error);
    }
  };

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    console.log(form)
  };

const handleImage = (event) => {
  setImageSelected(event.target.files[0]);
  if (event.target.files[0] !== undefined) {
    setAllowUpload(true);
  } else if (event.target.files[0] === undefined) {
    setAllowUpload(false);
  }
}

const uploadImage = async() => {
  setUploading(true)
  const data = new FormData();
  data.append("file",imageSelected)
  data.append("upload_preset","igey7tkr")
  await axios.post("https://api.cloudinary.com/v1_1/hhbvljc23/image/upload",data).then((response)=>{setForm({ ...form, img_id: response.data.public_id });})
  setUploading(false)
  setSuccessUpload(true)
}


    return(
        <div className="contenedor">
        <Form>
        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="titulo" onChange={handleChange} />
        </Form.Group>
  
        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Subtitulo</Form.Label>
          <Form.Control type="text" placeholder="Enter subtitle" name="subtitulo" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Cuerpo</Form.Label>
          <Form.Control as="textarea" placeholder="Enter body" name="cuerpo" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" style={{border:"black 1px solid",padding:"1rem",borderRadius:"10px"}}>
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={handleImage} />
          {
            allowUpload &&
            <Button variant="primary" onClick={uploadImage} style={{marginTop:"1rem"}}>Subir imagen</Button>
          }
          {
            uploading &&
            <Alert key="primary" variant="primary" style={{marginTop:"1rem"}}>Subiendo imagen...</Alert>
          }
          {
            successUpload &&
            <Alert key="success" variant="success" style={{marginTop:"1rem"}}>Imagen subida</Alert>
          }
          {
            !successUpload && !uploading &&
            <Alert key="warning" variant="warning" style={{marginTop:"1rem"}}>No hay imagen subida</Alert>
          }
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>Guardar</Button>

        <Alert key={variante} variant={variante}>
          {texto}
        </Alert>

      </Form>
      </div>
    )
}